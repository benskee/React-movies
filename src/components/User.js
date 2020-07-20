import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const user = this.props.userProp;
        // console.log(user);

        return (
            <div className="col-md-3">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="https://placehold.it/500x500" alt={`{user.firstName} {user.lastName}`} />
                        <div className="card-body">
                            <h4 className="card-title">{user.firstName} {user.lastName}</h4>
                            <p className="card-text">{user.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
