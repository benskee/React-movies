import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        const movie = this.props.movieProp;
        let buttonStyle;
        if (movie.watched) {
            buttonStyle = <div style={{ margin: '5px 0' }}>
                <button className="btn-block" type= "button" disabled>Watched</button>
            </div>
        } else {
            buttonStyle = <div style={{ margin: '5px 0' }}>
                <button className="add-to-cart btn btn-success btn-block" onClick={() => this.props.handleClick(movie)} >Add to Watch List</button>
                </div>
        }

        return (
            <div>
                <div className="card-deck">
                    <div className="card" style={{ marginTop: '25px' }}>
                        <img className="card-img-top" style={{ maxWidth: '141px', margin: '5px auto' }} src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`} alt={movie.original_title} />
                        <div className="card-body">
                            <h4 className="card-title">{movie.original_title}</h4>
                            <hr />
                            <p className="card-text"><b>Description: </b>{movie.overview}</p>
                            <p className="card-text"><b>Release Year: </b>{movie.release_date.substr(0,4)}</p>
                            <p className="card-text"><b>Vote Average: </b>{movie.vote_average}</p>
                            {buttonStyle}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
