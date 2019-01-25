import React, { Component } from 'react';
import {Button, Form, Input, DropdownToggle, InputGroupAddon, InputGroup, DropdownItem, InputGroupButtonDropdown, DropdownMenu} from 'reactstrap';

class Filter extends Component {
    static defaultProps = {
        data: [],
        onComplite: () => {},
    };
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            value: '',
            filterKeys: ['id', 'firstName', 'lastName', 'email', 'phone'],
            splitButtonOpen: false,
            filterCol: 'all'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.selectCol = this.selectCol.bind(this);
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
        let keys = this.state.filterKeys;
        if (this.state.filterCol !== 'all')  {
            keys = [this.state.filterCol];
        }
        let filter = this.state.data.filter((item) => {
            let result = keys.filter((key, index) => {
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

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    selectCol(item) {
        this.setState({
            filterCol: item
        });
    }

    render() {
        let keys = ['all'].concat(this.state.filterKeys);
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                        <DropdownToggle caret>
                            {this.state.filterCol}
                        </DropdownToggle>
                        <DropdownMenu>
                        {keys.map((item, index) => (
                            <DropdownItem onClick={ () => this.selectCol(item) }>{item}</DropdownItem>
                        ))}
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input type="text" id="filter" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
                    <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
                </InputGroup>
            </Form>
        );

    }
}


export default Filter;
