import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { listItem, onClick } = this.props;
    return (
      <tr>
        <td>
          <a href={listItem.url}>{listItem.title}</a>
        </td>
        <td>{listItem.author}</td>
        <td>{listItem.num_comments}</td>
        <td>{listItem.points}</td>
        <td>
          <button
            className="btn btn-secondary"
            onClick={() => onClick(listItem.objectID)}
          >
            Dismiss
          </button>
        </td>
      </tr>
    );
  }
}

export default NewsItem;
