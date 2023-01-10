import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
   let {image, name, price} = this.props.item;
    return (
        <div className="card" style={{height: "100%"}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title" style={{fontSize: "18px"}}>{name}</h5>
            <p className="card-text" >{price} $</p>
            {/* Button trigger modal */}
            <button onClick={() => {
                this.props.setStateModal(this.props.item)
            }} type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                Add to carts 🛒
            </button>
        </div>
    </div>
    )
  }
}
