import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'

import CapsuleConsumer from '../../context/Context'
import { Link } from 'react-router-dom';


class CategoryList extends Component {

  
 
  changeCurrentCategory = (category,dispatch) => {
  dispatch({type :"CHANGE_CURRENT_CATEGORY",payload : category})
  dispatch({type :"GET_PRODUCTS_BY_ID",payload : category})
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
                    
                      <ListGroupItem style={{textAlign:"center"}} 
                                     active={cat.categoryName !==currentCategory?null:true} 
                                     onClick={()=>this.changeCurrentCategory(cat,dispatch)} 
                                     key={cat.id}>{cat.categoryName}</ListGroupItem>
                    
                    ) 
                  )}
                  <ListGroupItem style={{textAlign:"center",backgroundColor:"lightgray",fontWeight:"500"}}>
                    <Link style={{textDecoration:"none"}} to="/CategorySettings">Category Settings</Link>
                    </ListGroupItem>
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


