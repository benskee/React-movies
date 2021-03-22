import React, { Component } from 'react'
import UserList from '../components/UserList';
import firebase from '../components/Firebase';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            formName: '',
            formEmail: '',
            formLocation: ''
        }
        this.db = firebase.firestore();
    }

        componentDidMount() {
            this.db.collection('users').get().then(querySnapshot => {
                let data = [];
                querySnapshot.forEach(doc => {
                    data.push(doc.data())
                })
                
                this.setState({
                    users: data
                })
            })
        }

    handleSubmit = e => {
        e.preventDefault();

        const user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            location: e.target.location.value
        }

        this.db.collection('users').add(user)
        .then(docRef => console.log("User created successfully."))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <form action="" style={{ marginTop: '25px' }} onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.state.formFirstName} name="firstName" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.state.formLastName} name="lastName" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.state.formLocation} name="location" placeholder="Location" />
                            </div>
                            <input type="submit" className="btn btn-success" value="Submit"/>
                        </form>
                    </div>
                </div>
                  
                <UserList users={this.state.users} />
            </div>
        )
    }
}