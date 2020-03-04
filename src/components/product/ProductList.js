import React, { Component } from 'react';
import CapsuleConsumer from '../../context/Context';
import {Table, Button} from "reactstrap";
import { Link } from 'react-router-dom'

class ProductList extends Component {
    render() {
        return (
            <CapsuleConsumer>
                {
                    value => {
                        const { products,filteredProduct } = value;
                       
                        return (
                            <div>
                                {filteredProduct.length>0?<Table striped>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Quantity Per Unit</th>
                                            <th>Unit Price</th>
                                            <th>Unit in Stock</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredProduct.map(pro => (
                                            <tr key={pro.id}>
                                                <th scope="row">{pro.id}</th>

                                                <td>{pro.productName}</td>
                                                <td>{pro.quantityPerUnit}</td>
                                                <td>{pro.unitPrice}</td>
                                                <td>{pro.unitsInStock}</td>
                                                <td>
                                                    <Button color="primary" onClick={() => this.addToCart(pro)}>Add</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>:
                                <h1>hello</h1>
                                
                                }
                                
                            </div>
                        )
                    }
                }
            </CapsuleConsumer>
        );
    }
}

export default ProductList;