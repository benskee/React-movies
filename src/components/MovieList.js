import React, { Component } from 'react'
import Movie from './Movie'

export default class MovieList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.movies.map(movie => <Movie movieProp={movie} key={movie.id} handleClick={this.props.handleClick}/>)}
            </React.Fragment>
        )
    }
}
