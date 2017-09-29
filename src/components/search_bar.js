// Whenever we transpile from jsx to javascript we need to make sure
// we import react into all of our jsx files.
import React, {Component} from 'react'

// define a new class, searchbar, and give it access
// to all the functionality that react.component has

// This is a class based component
// must have a defined render method
class SearchBar extends Component{
    constructor(props){
        // 'Component' itself has its own constructor function
        // Essentially calling the parent function
        super(props)
        // ONLY inside our constructor functiono 
        // do we manipulate state like this.
        this.state = { term: 'Starting value'}
    }
    render() {
        return (
            <div className="search-bar">
                 <input
                    value={this.state.term}
                    onChange={event=> this.onInputChange(event.target.value)} 
                    />
            </div>
        );
    }
    // custom function
    onInputChange(term){
        // set the state with the updated term
        this.setState({ term: event.target.value })
        // Callback function passed down from index.js
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar