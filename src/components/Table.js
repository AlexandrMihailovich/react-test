import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Filter from './Filter'
import ItemInfo from './ItemInfo'


class SortedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            sort: 'ASC',
            sortBy: null,
            columns: ['id', 'firstName', 'lastName', 'email', 'phone'],
            selected: null
        };
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

    componentWillReceiveProps() {

        this.setState({
            data: this.props.data.slice(((this.props.match.params.number - 1) * 50), (this.props.match.params.number * 50) )
        });
        console.log(this.state.data)
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

    render() {
        //console.log(this.props)
        return (
            <div>
                <Filter data={this.state.data} onComplite={this.filterResult} />
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
                <ItemInfo item={this.state.selected}/>
            </div>
        );

    }
}


export default SortedTable;
