import React, { Component } from 'react';
import { Table, ListGroup, ListGroupItem } from 'reactstrap';
import Filter from './Filter'

class SortedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            sort: 'ASC',
            sortBy: null,
            columns: ['id', 'firstName', 'lastName', 'email', 'phone'],
            selected: null
        }
        this.filterResult = this.filterResult.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.compareBy = this.compareBy.bind(this);
        this.selectRow = this.selectRow.bind(this);
    }

    compareBy(key, sort) {

        if(sort === 'DESC') {
            return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            };
        }
        else {
            return function (a, b) {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
            };
        }
    }

    sortBy(key) {
        let sort = this.state.sort === 'DESC' ? 'ASC' : 'DESC';
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key, sort));
        this.setState({
            data: arrayCopy,
            sort: sort,
            sortBy: key
        });
    }

    filterResult(data) {
        this.setState({
            data: data,
        });
    }

    selectRow(index) {
        this.setState({
            selected: this.state.data[index],
        });
    }

    renderSelected() {
        if(!this.state.selected) {
            return null;
        }
        return (
            <ListGroup>
                <ListGroupItem className="justify-content-between">Выбран пользователь <b>{this.state.selected.firstName} {this.state.selected.lastName}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Описание:
                    <textarea>
                    {this.state.selected.description}
                    </textarea></ListGroupItem>
                <ListGroupItem className="justify-content-between">Адрес проживания: <b>{this.state.selected.address.city}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Город: <b>{this.state.selected.address.city}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Провинция/штат: <b>{this.state.selected.address.state}</b></ListGroupItem>
                <ListGroupItem className="justify-content-between">Индекс: <b>{this.state.selected.address.zip}</b></ListGroupItem>

            </ListGroup>
        )
    }

    render() {
        return (
            <div>
                <Filter data={this.state.data} onComplite={this.filterResult}></Filter>
                <Table hover responsive className={'data-table'}>
                    <thead>
                    <tr>
                        {this.state.columns.map((item, index) => (
                            <th key={'header-'+index} onClick={() => this.sortBy(item)}>{item} <span className={[this.state.sort, this.state.sortBy === item ? 'active' : ''].join(' ')}></span></th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((item, index) => (
                        <tr key={'row-'+index} onClick={() => this.selectRow(index)}>
                            {this.state.columns.map((key, index) => (
                                <th key={'col-'+index}>{item[key]}</th>
                            ))}
                        </tr>))}
                    </tbody>
                </Table>
                {this.renderSelected()}
            </div>
        );

    }
}


export default SortedTable;
