import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import CapsuleConsumer from '../../context/Context';
import alertify from "alertifyjs"




class CategorySettings extends Component {

    // State for special features of this Component
    state = {
        isVisible: false,
        inputVisible: false,
        isShow: true,
        value: "+ Open Form",
        categoryIdForPutMethod: "",
        methodType:"",
        categoryName: "",
        seoUrl: "",
        lengthInState: ""
    }

    /*************** Dispatch Methods Part **************/
    // After every successful process, it will navigate 
    // some path  defining by onClick method.
    nextPath(path) {
        this.props.history.push(path);
    }



    //  Saving Category Method from CategorySettings to Reducer via dispatch
    saveCategory = (event, dispatch,idFromLength) => {
        if (event.state.methodType !== "PUT") {
            const newCat = {
                id: idFromLength + 1,
                categoryName: event.state.categoryName,
                seoUrl: event.state.seoUrl
            }
            dispatch({ type: "SAVE_CATEGORY_TO_API", payload: newCat })
            alertify.success(event.state.categoryName + " added to Category List!")
            this.nextPath('/Home')
        }
        else {
            const newCat = {
                id:event.state.categoryIdForPutMethod,
                categoryName: event.state.categoryName,
                seoUrl: event.state.seoUrl
            }
            dispatch({ type: "UPDATE_CATEGORY", payload: newCat })
            alertify.success("Category is updated as "+event.state.categoryName )
            this.nextPath('/Home')
        }

    }
  
    //  Delete Category Method from CategorySettings to Reducer via dispatch
    deleteCategory = (_category, dispatch) => {
        alertify.confirm('Remove Category', 'Do you want to delete this category?', function () {
            dispatch({ type: "DELETE_CATEGORY", payload: _category })
            alertify.error('Deleted!')
        }
            , function () { alertify.error('Cancel') });
    }


    updateCategory = (_category) => {
        this.setState({ categoryIdForPutMethod : _category.id, categoryName: _category.categoryName, seoUrl: _category.seoUrl })
        this.setState({ isVisible: true })
        this.setState({ value: "- Close Form" })
        this.setState({ inputVisible: true })
        this.setState({ methodType : "PUT"})
    }

    /************ Form Part *************/

    // Catching differences between forms input via  fallowing method
    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }



    /*****************  Style Part ********************* */
    // Fallowing method will change display propert of html tag
    changeDisplay = () => {
        if (this.state.isVisible) {
            this.setState({ value: "+ Open Form" })

        }
        else {
            this.setState({ value: "- Close Form", inputVisible: false, categoryName: "", seoUrl: "" })
        }
        this.setState({ isVisible: !this.state.isVisible })
        this.setState({ isShow: !this.state.isShow })
    }
    // data notation for style properties
    hideDisplay = {
        display: "none"
    }
    showDisplay = {
        display: "none"
    }
    hideInput = {
        display: "none"
    }

   
    render() {
        return (
            <CapsuleConsumer>
                {
                    value => {

                        const { categories, dispatch } = value;
                       
                        return (
                            <div>

                                <Button color="success" onClick={this.changeDisplay} className="mt-5"> {this.state.value}</Button>
                                <div style={this.state.isVisible ? null : this.hideDisplay}>

                                    <Form className="mt-3  font-weight-bold" onSubmit={this.handleSubmit}>
                                        <FormGroup style={this.state.inputVisible ? this.hideInput : null} className="text-left">
                                            <Label for="id">Category Id</Label>
                                            <Input style={this.state.display} type="text"
                                                name="id"
                                                onChange={this.handleChange}
                                                placeholder={categories.length + 1}
                                                
                                                disabled
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup className="text-left">
                                            <Label for="categoryName">Category Name</Label>
                                            <Input type="text"
                                                name="categoryName"
                                                onChange={this.handleChange}
                                                placeholder="enter a category name"
                                                value={this.state.categoryName}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup className="text-left">
                                            <Label for="seoUrl">Seo Url</Label>
                                            <Input type="text"
                                                name="seoUrl"
                                                onChange={this.handleChange}
                                                placeholder="enter a seo url"
                                                value={this.state.seoUrl}
                                                required
                                            />
                                        </FormGroup>
                                        <Button color="success" onClick={() => this.saveCategory(this, dispatch,categories.length)} type="submit">Submit</Button>

                                    </Form>
                                </div>

                                <ListGroup style={this.state.isShow ? null : this.hideDisplay} className="mt-5">
                                    {categories.map(
                                        cat => (
                                            <ListGroupItem style={{ textAlign: "center" }}
                                                key={cat.id}>
                                                <i onClick={() => this.updateCategory(cat, dispatch)} class="fas fa-edit" style={{ float: "left", color: "orangered", cursor: "pointer" }}></i>
                                                {cat.categoryName}
                                                <i onClick={() => this.deleteCategory(cat, dispatch)} class="fas fa-trash-alt" style={{ float: "right", color: "firebrick", cursor: "pointer" }}></i></ListGroupItem>
                                        )
                                    )}
                                </ListGroup>
                            </div>
                        )
                    }}
            </CapsuleConsumer>

        );
    }
}

export default CategorySettings;