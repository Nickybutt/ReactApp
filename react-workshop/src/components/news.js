import React, { Component } from "react";

import MDSpinner from "react-md-spinner";

import NewsItem from "./newsItem";
import SearchBar from "./searchBar";
import Button from "./button";
import SearchBarSubject from "./searchSubject";

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      title: "",
      author: "",
      isLoading: false,
      list: [],
      SearchSubject: "Hacker",
      page: 0,
      divHeight: 0
    };
  }

  componentDidMount() {
    // this.fetchData(0);
    console.log("componentDidMount");
  }

  componentDidUpdate(prevprops, prevState) {
    if (this.state.page !== prevState.page) {
      //const newList = prevState.list.concat(this.state.list);
      //this.setState({ list: newList });
    }
  }

  fetchData(pageNumber) {
    this.setState({
      isLoading: true,
      page: pageNumber
    });

    const tabelletje = {
      height: "500px"
    };

    const RootUrl = `https://hn.algolia.com/api/v1/search?query=${
      this.state.SearchSubject
    }&tags=story&page=${pageNumber}`;

    fetch(RootUrl)
      .then(res => res.json())
      .then(parsedJSON =>
        parsedJSON.hits.map(item => ({
          title: `${item.title}`,
          author: `${item.author}`,
          comments: `${item.num_comments}`,
          points: `${item.points}`,
          objectID: `${item.objectID}`
        }))
      )
      .then(list => {
        const listData = pageNumber === 0 ? list : this.state.list.concat(list);
        this.setState({
          list: listData,
          isLoading: false
        });
      })
      .catch(error => console.log("parsing failed", error));
  }

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

  onChangeSubject = SearchSubject => this.setState({ SearchSubject });

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

  getSearchsubject = pageNumber => {
    this.fetchData(pageNumber);
  };

  onScrollHandler = () => {
    this.state.divHeight = this.refs.inner.scrollHeight;
    console.log(this.state.divHeight);
    if (this.state.divHeight - 500 === this.refs.inner.scrollTop) {
      {
        this.getSearchsubject(0);
      }
      this.setState({
        divHeight: this.refs.inner.scrollHeight + 500
      });
    }
  };

  render() {
    console.log();
    const { page, list, search, SearchSubject, isLoading } = this.state;

    let filterContacts = list.filter(listItem => {
      return (
        listItem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        listItem.author.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="page">
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
              SearchSubject={SearchSubject}
            />
          </div>
          <div>
            <SearchBar changeSearch={this.onChangeSearch} search={search} />
          </div>

          <table className="table table-hover" style={this.tabelletje}>
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

          {isLoading ? (
            <MDSpinner className="spinner" size={100} />
          ) : (
            <button onClick={() => this.getSearchsubject(page + 1)}>
              more
            </button>
          )}
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
