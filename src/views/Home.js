import React, { Component } from 'react'
import axios from 'axios';
import MovieList from '../components/MovieList';
import firebase from '../components/Firebase'

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    this.db = firebase.firestore();
    }

    handleSubmit = e => {
        e.preventDefault();
        const movie = e.target.title.value;
        const api_key = process.env.REACT_APP_MOVIE_API_KEY;
        let movieData = [];

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${movie}&include_adult=false`)
            .then(res => {
                movieData.push(res.data.results[0])
                this.setState({
                    movies: movieData
                })
            })
        }
        
    handleClick = movie => {
        const movieToAdd = {
            id: this.state.movies[0].id,
            poster_path: this.state.movies[0].poster_path,
            original_title: this.state.movies[0].original_title,
            overview: this.state.movies[0].overview,
            release_date: this.state.movies[0].release_date,
            vote_average: this.state.movies[0].vote_average,
            watched: false
        }
        this.db.collection('movies').doc(this.state.movies[0].original_title).set(movieToAdd)
            .then(docRef => console.log("Movie added successfully."))
            .catch(err => console.log(err));
    }

    render() {
        const movies = this.state.movies;

        return (
            <div className='col-md-6 offset-3'>
                <form className="form-inline" style={{ margin: '25px 0' }} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Enter a Movie Title" style={{ marginRight: '10px' }} />
                        <input type="submit" value="Submit" className="btn btn-warning" />
                    </div>
                </form>
                <div className="row" style={{ margin: '25px 0' }}>
                    <MovieList movies={movies} handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
}