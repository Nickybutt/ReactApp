import React, { Component } from "react";

import MDSpinner from "react-md-spinner";

import NewsItem from "./newsItem";
import SearchBar from "./searchBar";
import Button from "./button";
import SearchBarSubject from "./searchSubject";
import TestForm from "./testFrom";

let timer;

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      search: "",
      title: "",
      author: "",
      isLoading: false,
      list: [],
      total: null,
      searchSubject: "",
      lastSearch: "",
      page: 0,
      searchList: this.createListFromSession()
    };
  }

  hello = () => {
    'hello'
  }

  fetchData(pageNumber) {
    if (this.state.isLoading) return;

    const listArray = pageNumber === 0 ? [] : this.state.list;

    this.setState({
      isLoading: true,
      page: pageNumber,
      list: listArray
    });

    const RootUrl = `https://hn.algolia.com/api/v1/search?query=${
      this.state.searchSubject
    }&tags=story&page=${pageNumber}`;

    fetch(RootUrl)
      .then(res => res.json())
      .then(parsedJSON => {
        return {
          hits: parsedJSON.hits.map(item => ({
            title: `${item.title}`,
            author: `${item.author}`,
            comments: `${item.num_comments}`,
            url: `${item.url}`,
            points: `${item.points}`,
            objectID: `${item.objectID}`
          })),
          total: parsedJSON.nbHits
        };
      })
      .then(this.fetchSuccess)
      .catch(this.fretchFailed);
  }

  fetchSuccess = list => {
    const listData =
      this.state.page === 0 ? list.hits : this.state.list.concat(list.hits);
    this.setState({
      list: listData,
      total: list.total,
      isLoading: false,
      lastSearch: this.state.searchSubject
    });
    // if (listData.length > 0) {
    sessionStorage.setItem(
      `searchTerm_${this.state.searchSubject}`,
      JSON.stringify({
        list: listData,
        total: list.total
      })
    );
    // }
  };

  fretchFailed = error => console.log("parsing failed", error);

  onChangeSearch = search => this.setState({ search });

  onChangeFormTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  onChangeFromAuthor = event => {
    this.setState({
      author: event.target.value
    });
  };

  onChangeSubject = searchSubject => this.setState({ searchSubject });

  addNews = event => {
    event.preventDefault();
    let title = this.state.title;
    let author = this.refs.author.value;

    let objectID = Math.floor(Math.random() * 100 + 1);

    this.setState({
      list: this.state.list.concat({
        objectID,
        title,
        author
      })
    });
    this.refs.title.value = "";
    this.refs.author.value = "";
  };

  onDelete(objectID) {
    this.setState({
      list: this.state.list.filter(listItem => listItem.objectID !== objectID)
    });
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  createListFromSession = () => {
    const searchTermList = [];
    for (var i = 0; i < sessionStorage.length; i++) {
      const searchTerm = sessionStorage.key(i);
      if (searchTerm.indexOf("searchTerm_") > -1) {
        searchTermList.push(searchTerm.split("_")[1]);
      }
    }
    return searchTermList;
  };

  getSearchsubject = pageNumber => {
    if (this.state.searchSubject === "") return;

    const usedSearchTerm =
      this.state.searchList.indexOf(this.state.searchSubject) > -1;
    const searchListArray = usedSearchTerm
      ? this.state.searchList
      : this.state.searchList.concat(this.state.searchSubject);

    this.setState({
      searchList: searchListArray
    });
    console.log("used data from sessionStorage");
    if (usedSearchTerm) {
      const sessionData = JSON.parse(
        sessionStorage.getItem(`searchTerm_${this.state.searchSubject}`)
      );
      this.setState({
        lastSearch: this.state.searchSubject,
        list: sessionData.list,
        total: sessionData.total
      });
    } else {
      this.fetchData(pageNumber);
    }
  };

  onScrollHandler = () => {
    clearTimeout(timer);
    timer = setTimeout(() => this.getMore(), 500);
  };

  getMore = () => {
    if (this.refs.inner.scrollHeight - 500 <= this.refs.inner.scrollTop) {
      this.getSearchsubject(this.state.page + 1);
    }
  };

  render() {
    const {
      list,
      search,
      total,
      searchSubject,
      isLoading,
      lastSearch
    } = this.state;

    let filterContacts = list.filter(listItem => {
      return (
        listItem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        listItem.author.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="page">
        <TestForm search={search} />
        <div
          className="interactions"
          ref="inner"
          onScroll={this.onScrollHandler}
        >
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => this.getSearchsubject(0)}
            >
              Search
            </button>
            <SearchBarSubject
              changeSubject={this.onChangeSubject}
              searchSubject={searchSubject}
            />
          </div>
          <div>
            <SearchBar changeSearch={this.onChangeSearch} search={search} />
          </div>

          {list.length > 0 && (
            <h3>
              {total} results for '{lastSearch}'
            </h3>
          )}

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Comments</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {filterContacts.map(listItem => {
                return (
                  <NewsItem
                    listItem={listItem}
                    key={listItem.objectID}
                    onClick={() => this.onDelete(listItem.objectID)}
                  />
                );
              })}
            </tbody>
          </table>

          {isLoading && <MDSpinner className="spinner" size={40} />}
        </div>
        <div>
          <h1>Enter some extra news</h1>
          <div className="form-group">
            <form onSubmit={event => this.addNews(event)}>
              <label>Title</label>
              <input
                onChange={this.onChangeFormTitle}
                className="form-control"
                type="text"
                ref="title"
                id="title"
              />
              <label>Author</label>
              <input
                onChange={this.onChangeFromAuthor}
                className="form-control"
                type="text"
                ref="author"
                id="author"
              />
              <button className="btn btn-secondary" type="submit">
                {" "}
                Add news
              </button>
            </form>
          </div>
          <Button alert={this.showAlert} />
        </div>
      </div>
    );
  }
}

export default NewsList;
