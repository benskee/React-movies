import React, { Component } from 'react'
import WatchedList from '../components/WatchedList';
import firebase from '../components/Firebase';


export default class Watched extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.db = firebase.firestore();
    }

    componentDidMount() {
        this.db.collection('movies').get().then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push(doc.data())
            })
            this.setState({
                movies: data
            })
        })
    }

    handleClick = movie => {
        this.db.collection('movies').doc(`${movie.original_title}`).update({
            watched: true
        })
            .then(docRef => console.log("Movie added successfully."))
            .catch(err => console.log(err));
    }

    render() {
        const movies = this.state.movies;

        return (
            <div>
                <WatchedList movies={movies} handleClick={this.handleClick} />
            </div>
        )
    }
}
