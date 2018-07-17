import React, {Component} from 'react';
import '../App.css';

const NewsListItem = ({article, onClick}) => {
    return (
        <div>
        <tr>
            Title: <a href = {article.url}>{article.title}</a>
            Author: {article.author}
            Num comments: {article.num_comments}
            points: {article.points}
            
        </tr>
        <button onClick={onClick}> Dissmiss </button>
        </div>
    )
}

export default NewsListItem;