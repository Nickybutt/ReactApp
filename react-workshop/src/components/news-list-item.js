import React, {Component} from 'react';

const NewsListItem = ({article}) => {
    return (
        <td>
            Title: <a href = {article.url}>{article.title}</a>
            Author: {article.author}
            Num comments: {article.num_comments}
            points: {article.points}
            <button onClick={(event) =>  this.setState(' ')}> Dissmiss </button>
        </td>
    )
}

export default NewsListItem;