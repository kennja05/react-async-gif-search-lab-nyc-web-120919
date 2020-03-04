import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    handleFormChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    

    render() {
        return(
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.searchTerm)}>
                <input onChange={this.handleFormChange} type='text' name='searchTerm' value={this.state.searchTerm} />
                <input type='submit' />
            </form>
        )
    }


}