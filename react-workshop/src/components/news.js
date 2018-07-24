import React, { Component } from "react";
import NewsItem from "./news-item";
import SearchBar from "./search-bar";
import Button from "./button";

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      list: props.list
    };
  }

  onChangenSearch(SearchName) {
    this.setState({
      search: SearchName
    });
  }

  showAlert() {
    alert("Dikke homo");
  }

  addNews(event) {
    console.log(this);
    event.preventDefault();
    let title = this.refs.title.value;
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
  }

  onDelete(objectID) {
    this.setState({
      list: this.state.list.filter(listItem => listItem.objectID !== objectID)
    });
  }

  render() {
    let filterContacts = this.state.list.filter(listItem => {
      return (
        listItem.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        listItem.author
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="page">
        <div className="interactions">
          <div>
            <SearchBar changeSearch={this.onChangenSearch.bind(this)} />
          </div>

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
        </div>
        <div>
          <h1>Enter some extra news</h1>
          <div className="form-group">
            <form onSubmit={this.addNews.bind(this)}>
              <label for="title">Title</label>
              <input
                className="form-control"
                type="text"
                ref="title"
                id="title"
              />
              <label for="author">Author</label>
              <input
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
        </div>
        <Button onClick={this.showAlert} />
      </div>
    );
  }
}

export default NewsList;
