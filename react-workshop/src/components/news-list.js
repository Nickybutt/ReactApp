import React, {Component} from 'react';

import NewsListItem from './news-list-item';

const initalList = [
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

class NewsList extends Component {
constructor(props) {
super(props)

this.state = {list:[...initalList]}
};

removeItem = objectID => () => {
    this.setState({
        list: this.state.list.filter(item => item.objectID !== objectID)
    });
}

render(){
    const {list} = this.state;
    return(
        <ul>
            {list.map(article => {
            return (
                <NewsListItem
                key = {article.objectID}
                article = {article}
                onClick={this.removeItem(article.objectID)}
                />
            );
            })}
        </ul>
    )
        


}

}

export default NewsList;