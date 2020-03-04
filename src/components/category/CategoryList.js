import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import CapsuleConsumer from '../../context/Context'


class CategoryList extends Component {
  render() {
    return (
      <CapsuleConsumer>
        {
          value => {

            const { categories} = value;
            return (
              <div>
                <ListGroup>
                  {categories.map(
                    category =>(
                    
                      <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
                    
                    )
                  )}
                  </ListGroup>

              </div>
            )

          }
        }
      </CapsuleConsumer>

    )
  }
}

export default CategoryList;


