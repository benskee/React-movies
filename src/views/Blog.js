import React, { Component } from 'react'
import PostList from '../components/PostList';
import axios from 'axios';

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://flask-blog-online.herokuapp.com/api/blog/posts')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    posts: res.data
                })
            })
        // fetch('api/blog/posts')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             posts: data
        //         })
        //     })
    }

    render() {
        return (
            <PostList posts={this.state.posts} />
        )
    }
}
