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
        if(!this.props.item) return null;
        let item = this.props.item;
        return (
            <ListGroup>
                <ListGroupItem className="justify-content-between">Выбран пользователь <b>{item.firstName} {item.lastName}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Описание:<textarea>{item.description}</textarea></ListGroupItem>
                <ListGroupItem className="justify-content-between">Адрес проживания: <b>{item.address.city}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Город: <b>{item.address.city}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Провинция/штат: <b>{item.address.state}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Индекс: <b>{item.address.zip}</b></ListGroupItem>
            </ListGroup>
        )
    }
}

export default ItemInfo;
