import React from "react";
class Dell extends React.Component {

     state = {
        product_Name: "DELL Inspiron Core i3 11th Gen",
        price: 44900,
        Image: "https://rukminim1.flixcart.com/image/224/224/kt8zb0w0/computer/n/m/v/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.jpeg?q=90",
        Qty: 1,


    }

   

    increment = () => {
        this.setState({ Qty: this.state.Qty + 1 })
    }

    decrement = () => {
        this.setState({ Qty: this.state.Qty - 1 })
    }

   
    render() {
        return (
            <>
                <div className="container" mt-5>
                    <div className="row">
                        <div className="col-md-10">
                            <table className="table table-hover">
                                <thead className="bg-secondry">
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>price</th>
                                    <th>Qty</th>
                                    <th>total price</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product_Name}</td>
                                        <td><img src={this.state.Image} alt="" height='70px' width='90px' /></td>
                                        <td>{this.state.price}</td>
                                        <td>  <i class="fa fa-minus-circle" onClick={this.decrement}></i>
                                            {this.state.Qty}
                                            <i class="fa fa-plus-circle" onClick={this.increment}></i>
                                        </td>
                                        <td>
                                            

                                            {this.state.price * this.state.Qty}</td>

                                    </tr>
                                    

                                </tbody>

                            </table>



                        </div>
                    </div>
                </div>










            </>
        )
    }

}

export default Dell