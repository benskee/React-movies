import React, { Component } from 'react'
import TodoList from '../components/TodoList';

export default class Todos extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            preview: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.todoInput.value);
        
        // Invalid. React does not like this
        // this.state.todos = 'asdfhj'

        this.setState({
            todos: this.state.todos.concat(event.target.todoInput.value)
        })
        // console.log(this.state.todos);
    }

    handleChange = event => {
        this.setState({
            preview: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className="form-inline" onSubmit={this.handleSubmit} style={{margin: '25px 0'}}>
                            <div className="form-group">
                                {/* <input style="width: 100%;" type="text" name="" id="" className="form-control" placeholder="" /> */}
                                {/* <input style={{ width: '100%'}} type="text" name="" id="" className="form-control" placeholder="" /> */}
                                {/* <input type="text" defaultValue="add a todo item" name="" id="" className="form-control" placeholder="" /> */}
                                <input onChange={this.handleChange} value={this.state.preview} type="text" name="todoInput" id="" className="form-control" placeholder="" />
                                <input type="submit" className="btn btn-primary" value="Add Todo" />
                            </div>
                        </form>

                        <h4>{this.state.preview}</h4>

                        <TodoList todos={this.state.todos} />
                    </div>
                </div>
            </div>
        )
    }
}
