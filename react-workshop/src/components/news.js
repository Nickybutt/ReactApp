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

  showAlert() {
    alert("Moggu homo");
  }

  onChangeSearch = search => this.setState({ search });

  addNews(event) {
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

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

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

    const { search } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <div>
            <SearchBar changeSearch={this.onChangeSearch} search={search} />
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
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                ref="title"
                id="title"
              />
              <label>Author</label>
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
          <Button alert={this.showAlert} />
        </div>
      </div>
    );
  }
}

export default NewsList;
