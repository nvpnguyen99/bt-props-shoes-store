import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let {name, price, description, quantity, image} = this.props.content;
    return (
        <div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{maxWidth: "900px"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Product details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-4">
                                <img src={image} className="img-fluid" alt="" />
                            </div>
                            <div className="col-8 d-flex flex-column justify-content-center">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Name:</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'>Price:</td>
                                        <td>{price} $</td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold'>Quantity:</td>
                                        <td>{quantity}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-weight-bold' style={{verticalAlign: 'top'}}>Description:</td>
                                        <td>{description}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-dark"> Add to carts 🛒</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
