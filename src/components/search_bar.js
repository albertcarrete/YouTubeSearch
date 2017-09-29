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
            <div>
                 <input
                    value={this.state.term}
                    onChange={event=> this.setState({ term: event.target.value })} 
                    />
            </div>
        );
    }
}

export default SearchBar