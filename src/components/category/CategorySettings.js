import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import CapsuleConsumer from '../../context/Context';
import alertify from "alertifyjs"




class CategoryAdd extends Component {

    // State for special features of this Component
    state = {
        isVisible: false,
        isShow: true,
        value: "+ Open Form"
    }

    // Catching differences between forms input via  fallowing method
    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    // After every successful process, it will navigate 
    // some path  defining by onClick method.
    nextPath(path) {
        this.props.history.push(path);
    }

    //  Method of Navigate to Reducer via dispatch
    saveCategory = (event, dispatch) => {
        dispatch({ type: "SAVE_CATEGORY_TO_API", payload: { id: event.state.id, categoryName: event.state.categoryName, seoUrl: event.state.seoUrl } })
        alertify.success(event.state.categoryName+ " added to Cart")
        this.nextPath('/Home')
    }
   
    // Fallowing method will change display propert of html tag
    changeDisplay = () => {
        if (this.state.isVisible) {
            this.setState({ value: "+ Open Form" })
        }
        else {
            this.setState({ value: "- Close Form" })
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

    render() {
        return (
            <CapsuleConsumer>
                {
                    value => {

                        const { categories, dispatch, currentCategory } = value;
                        return (
                            <div>
                                <Button color="success" onClick={this.changeDisplay} className="mt-5"> {this.state.value}</Button>
                                <div style={this.state.isVisible ? null : this.hideDisplay}>

                                    <Form className="mt-3  font-weight-bold" onSubmit={this.handleSubmit}>
                                        <FormGroup className="text-left">
                                            <Label for="id">Category Id</Label>
                                            <Input type="text"
                                                name="id"
                                                onChange={this.handleChange}
                                                placeholder={categories.length + 1}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup className="text-left">
                                            <Label for="categoryName">Category Name</Label>
                                            <Input type="text"
                                                name="categoryName"
                                                onChange={this.handleChange}
                                                placeholder="enter a category name"
                                                required
                                                />
                                        </FormGroup>
                                        <FormGroup className="text-left">
                                            <Label for="seoUrl">Seo Url</Label>
                                            <Input type="text"
                                                name="seoUrl"
                                                onChange={this.handleChange}
                                                placeholder="enter a seo url"
                                                required
                                                 />
                                        </FormGroup>
                                        <Button color="success" onClick={() => this.saveCategory(this, dispatch)} type="submit">Submit</Button>
                                    </Form>
                                </div>

                                <ListGroup style={this.state.isShow ? null : this.hideDisplay} className="mt-5">
                                    {categories.map(
                                        cat => (
                                            <ListGroupItem style={{ textAlign: "center" }}
                                                active={cat.categoryName !== currentCategory ? null : true}
                                                onClick={() => this.changeCurrentCategory(cat, dispatch)}
                                                key={cat.id}>{cat.categoryName}</ListGroupItem>
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

export default CategoryAdd;