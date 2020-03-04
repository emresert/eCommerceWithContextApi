import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom"
import alertify from "alertifyjs";
import CapsuleConsumer from '../../context/Context';
import CategoryList from './CategoryList';

class CategoryAdd extends Component {

    state = {
        isVisible: false,
        isShow: true
    }

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }
    saveCategory = (event, dispatch) => {
        dispatch({ type: "SAVE_CATEGORY_TO_API", payload: event.state })
    }
    onClickTest = () => {

        this.setState({ isVisible: !this.state.isVisible })
        this.setState({ isShow: !this.state.isShow })
    }

    noneStyle = {

        display: "none"
    }
    showDisplay = {
        display:"none"
    }

    render() {
        return (
            <CapsuleConsumer>
                {
                    value => {

                        const { categories, dispatch, currentCategory } = value;
                        return (
                            <div>

                                <Button onClick={this.onClickTest} className="mt-5"> + Open Form</Button>

                                <div style={this.state.isVisible ? null : this.noneStyle}>

                                    <Form className="mt-3  font-weight-bold" onSubmit={this.handleSubmit}>
                                        <FormGroup className="text-left">
                                            <Label for="id">Category Id</Label>
                                            <Input type="text"
                                                name="id"
                                                onChange={this.handleChange}
                                                placeholder={categories.length + 1}
                                            />
                                        </FormGroup>
                                        <FormGroup className="text-left">
                                            <Label for="categoryName">Category Name</Label>
                                            <Input type="text"
                                                name="categoryName"
                                                onChange={this.handleChange}
                                                placeholder="enter a category name" />
                                        </FormGroup>
                                        <FormGroup className="text-left">
                                            <Label for="seoUrl">Seo Url</Label>
                                            <Input type="text"
                                                name="seoUrl"
                                                onChange={this.handleChange}
                                                placeholder="enter a seo url" />
                                        </FormGroup>
                                        <Button onClick={() => this.saveCategory(this, dispatch)} type="submit">Submit</Button>
                                    </Form>
                                </div>

                                <ListGroup style={this.state.isShow ? null : this.noneStyle} className="mt-5">
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