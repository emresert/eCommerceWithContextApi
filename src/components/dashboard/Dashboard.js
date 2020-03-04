import React, { Component } from 'react';
import CategoryList from '../category/CategoryList'
import { Row,Col } from 'reactstrap';
import ProductList from '../product/ProductList';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                   <Col xs="3">
                        <CategoryList>

                        </CategoryList>
                    </Col>
                    <Col xs="9">
                       <ProductList>
                           
                       </ProductList>
                    </Col>
                    </Row>
                
            </div>
        );
    }
}

export default Dashboard;