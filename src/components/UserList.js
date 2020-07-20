import React, { Component } from 'react'
import User from './User'

export default class UserList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.users.map((user, index) => <User key={index} userProp={user} />)}
            </div>
        )
    }
}
