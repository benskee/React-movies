import React, { Component } from 'react'
import WatchedMovie from './WatchedMovie'

export default class WatchedList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.movies.map(movie => <WatchedMovie movieProp={movie} key={movie.id} handleClick={this.props.handleClick}/>)}
            </div>
        )
    }
}
