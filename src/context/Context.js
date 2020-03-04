import React, { Component } from 'react';

const CapsuleContext =  React.createContext();
export class CapsuleProvider extends Component {
    state = {
        currentCategory: "",
        categories: [],
        products: [],
        apiUrl: "http://localhost:3000/",
        cart: [],
        
      }

      getCategories = () => {
        fetch(this.state.apiUrl + "categories")
          .then(res => res.json())
          .then(data => this.setState({ categories: data }));
      }
      getCategoryId = (catId) => {
        this.getProducts(catId);
      }
      changeCurrentCategory = dataForChange => {
        this.setState({ currentCategory: dataForChange.categoryName });
      }

       /* --- Method of Product ---*/
  getProducts = (categoryId) => {
    if (categoryId) {
      fetch(this.state.apiUrl + "products/?categoryId=" + categoryId).then(res => res.json()).then(
        data => this.setState({ products: data }))
    }
    else {

      fetch(this.state.apiUrl + "products").then(res => res.json()).then(
        data => this.setState({ products: data }))
    }
  }


  /* --- Methods of Cart ---*/
  addToCart = (_product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(p => p.product.id === _product.id)

    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1;
    }
    else {
      newCart.push({ product: _product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    //alertify.success(_product.productName + " is added to cart")
  }

  removeItemFromCart = (_product) => {
    let newCart = this.state.cart.filter(p => p.product.id !== _product.id);
    this.setState({ cart: newCart });
   // alertify.error(_product.productName + " removed from cart")
  }



  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

    render() {
        return (
            <CapsuleContext.Provider value = {this.state}>
                {this.props.children}
            </CapsuleContext.Provider>
        );
    }
}
const CapsuleConsumer = CapsuleContext.Consumer;

export default CapsuleConsumer;
