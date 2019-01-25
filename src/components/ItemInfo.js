import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";



class ItemInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        };

    }
    componentWillReceiveProps() {
        this.setState({
            item: this.props.item
        });
    }

    render() {
        if(!this.state.item) return null;
        return (
            <ListGroup>
                <ListGroupItem className="justify-content-between">Выбран пользователь <b>{this.state.item.firstName} {this.state.item.lastName}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Описание:<textarea>{this.state.item.description}</textarea></ListGroupItem>
                <ListGroupItem className="justify-content-between">Адрес проживания: <b>{this.state.item.address.city}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Город: <b>{this.state.item.address.city}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Провинция/штат: <b>{this.state.item.address.state}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Индекс: <b>{this.state.item.address.zip}</b></ListGroupItem>
            </ListGroup>
        )
    }
}

export default ItemInfo;
