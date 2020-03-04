import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import CapsuleConsumer from '../../context/Context'


class CategoryList extends Component {

  changeCurrentCategory = (category,dispatch,e) => {
   dispatch({type :"CHANGE_CURRENT_CATEGORY",payload : category})
  }
  render() {
    return (
      <CapsuleConsumer>
        {
          value => {

            const { categories,dispatch,currentCategory} = value;
            return (
              <div>
                <ListGroup>
                  {categories.map(
                    cat =>(
                    
                      <ListGroupItem onClick={this.changeCurrentCategory.bind(this,cat,dispatch)} key={cat.id}>{cat.categoryName}</ListGroupItem>
                    
                    ) 
                  )}
                  </ListGroup>
                  <h2>{currentCategory}</h2>
              </div>
            )

          }
        }
      </CapsuleConsumer>

    )
  }
}

export default CategoryList;


