import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderListShoes = () => {
        return this.props.productData.map((product) => {
            return <div className="col-4" key={product.id} style={{marginBottom: "10px"}}>
                <ProductItem item={product} setStateModal={this.props.setStateModal}/>
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderListShoes()}
            </div>
        )
    }
}
