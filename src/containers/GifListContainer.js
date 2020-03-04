import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchTerm: "dog"
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {

            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&limit=3&api_key=ExKgr4BO7Br5UWeUU23xQg4ymES6IAUQ`)
                .then(res => res.json())
                .then(gifResponse => this.setState({
                    gifs: gifResponse.data
                }))
        }
    }

    

    handleSubmit = (e, search) => {
        e.preventDefault()
        this.setState({
            searchTerm: search
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <GifList gifs={this.state.gifs} />
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }



}