import React, { Component } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default class Store extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
        }
    }

    componentDidMount = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => this.setState({ products: res.data }))
    }

    render() {
        return (
            <div className="container">
                <h3 className="h3">Products </h3>
                <div className="row">
                    <ProductList products={this.state.products} cart={this.props.cart} addItem={this.props.addItem} />
                </div>
            </div>
        )
    }
}
