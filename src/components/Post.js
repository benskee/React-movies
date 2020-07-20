import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const post = this.props.post;

        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <img src="" className="img-fluid" alt={post.user} />
                    </div>
                    <div className="col-md">
                        <div>
                            <a href="/">{post.body}</a>
                        </div>
                            <cite>{post.author}</cite>
                        <br />
                        <small>{post.created_on}</small>
                    </div>
                </div>
            </li>
        )
    }
}
