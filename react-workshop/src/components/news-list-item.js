import React, {Component} from 'react';

const NewsListItem = ({article, onClick}) => {
    return (
        <div className="table-row">
        <li>
            Title: <a href = {article.url}>{article.title}</a>
            Author: {article.author}
            Num comments: {article.num_comments}
            points: {article.points}
            <button onClick={onClick}> Dissmiss </button>
        </li>
        </div>
    )
}

export default NewsListItem;