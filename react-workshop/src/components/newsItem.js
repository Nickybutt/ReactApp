import React, { Component } from "react";
import PropTypes from "prop-types";

class NewsItem extends Component {
  render() {
    const { listItem, onClick } = this.props;
    return (
      <tr>
        <td>
          <a href={listItem.url}>{listItem.title}</a>
        </td>
        <td>{listItem.author}</td>
        <td>{listItem.comments}</td>
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

NewsItem.proptypes = {
  title: PropTypes.string,
  author: PropTypes.string
};

export default NewsItem;
