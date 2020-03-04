import React, { Component } from 'react';
import CategoryList from '../category/CategoryList'
import { Row,Col } from 'reactstrap';

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
                       
                    </Col>
                    </Row>
                
            </div>
        );
    }
}

export default Dashboard;