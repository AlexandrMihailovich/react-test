import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            value: '',
            filterKeys: ['id', 'firstName', 'lastName', 'email', 'phone'],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        let data = this.dataFilter(this.state.value);
        this.props.onComplite(data);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    dataFilter(val) {
        let filter = this.state.data.filter((item) => {
            let result = this.state.filterKeys.filter((key, index) => {
                if(item[key].toString().toLowerCase().substring(0, val.length) === val.toLowerCase()) {
                    return item;
                }
                return false;
            });
            if(result.length >= 1) {
                return result
            }
            return false;
        });
        return filter;
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="filter">Filter</Label>
                    <Input type="text" id="filter" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
                </FormGroup>
                <Button>Search</Button>
            </Form>
        );

    }
}


export default Filter;
