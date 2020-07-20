import React, { Component } from 'react';
import axios from 'axios';

export default class ShopSingle extends Component {
    constructor() {
        super();
        // console.log(this)
        this.state = {
        //     productId: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
            .then(res => this.setState({ product: res.data }));
    }
    
    render() {
        const product = this.state.product;

        return (
            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    <div className="d-flex">
                        <div className="card card-1">
                            <div className="pr-3 row justify-content-end">
                                <div className="fa fa-heart-o like"></div>
                            </div>
                            <div className="product-pic"> <img alt={product.title} className="img-fluid pic1" src={product.image} /> </div> <small className="category">Backpacks</small>
                                <h5 className="product-name">{product.title}</h5>
                                <div className="row px-3 justify-content-between">
                                    <p className="price">${product.price}</p>
                                    <div className="stars"> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star-o"></span> <span className="fa fa-star-o"></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
