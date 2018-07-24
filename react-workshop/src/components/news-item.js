import React, { Component } from "react";

class NewsItem extends Component {
  deleteItem() {
    this.props.onClick(this.props.listItem.objectID);
  }

  render() {
    return (
      <tr>
        <td>
          <a href={this.props.listItem.url}>{this.props.listItem.title}</a>
        </td>
        <td>{this.props.listItem.author}</td>
        <td>{this.props.listItem.num_comments}</td>
        <td>{this.props.listItem.points}</td>
        <td>
          <button onClick={() => this.deleteItem()}>Dismiss</button>
        </td>
      </tr>
    );
  }
}

export default NewsItem;
