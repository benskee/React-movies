import React, { Component } from 'react'
import Post from './Post'

export default class PostList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.posts.map(post => <Post key={post.id} post={post} />)}
            </ul>
        )
    }
}
