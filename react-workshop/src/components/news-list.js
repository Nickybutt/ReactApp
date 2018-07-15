import React, {Component} from 'react';

import NewsListItem from './news-list-item';

const list = [
    {
    title: "react",
    url: 'https://github.com/Nickybutt/ReactApp/pull/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }, ];

const NewsList = (props) => {
    const newsItems = list.map((article) =>{
        return <NewsListItem key={list.objectID} article={article} />
    })
    return (
        <table className="table table-striped">
        <tr className="list-group">
        {newsItems}
        </tr>
        </table>
    )
}

export default NewsList;