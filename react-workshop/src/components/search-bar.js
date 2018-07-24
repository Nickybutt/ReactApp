import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

<<<<<<< HEAD
    this.state = { search: "" };
  }

  onChangeSearch(search) {
    this.setState({ search });
    this.props.changeSearch(search);
  }

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          placeholder="search"
          onChange={event => this.onChangeSearch(event.target.value)}
        />
      </div>
    );
  }
=======
        this.state = {term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
        console.log(event.target.value)
    }

    render () {
        return (
            <div className="page">
            <div className = "interactions">
            <input 
            value = {this.state.term}
            onChange={this.onInputChange} />
        </div>
        </div>
        );
    }
>>>>>>> 3954834b3cb6f1142225fb0a67e0853b3080d5c3
}

export default SearchBar;
