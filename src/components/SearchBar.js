import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    onFormSubmit = event => {
        event.preventDefault();

        console.log(this.state.term);
    };

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search image</label>
                        <input 
                            className="form" 
                            value={this.state.term}
                            type="text" 
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;