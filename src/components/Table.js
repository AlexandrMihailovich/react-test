import React, { Component } from 'react';
import {Alert, Table} from 'reactstrap';


class SortedTable extends Component {
    static defaultProps = {
        data: [],
        pos: {
            from: 0,
            to: 50
        },
        sorted: () => {},
        select: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {
            sort: 'ASC',
            sortBy: null,
            columns: ['id', 'firstName', 'lastName', 'email', 'phone'],
        };
        this.sortBy = this.sortBy.bind(this);
        this.compareBy = this.compareBy.bind(this);
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
        let arrayCopy = [...this.props.data];
        arrayCopy.sort(this.compareBy(key, sort));
        this.setState({
            sort: sort,
            sortBy: key
        });
        this.props.sorted(arrayCopy);
    }

    render() {
        let data = this.props.data;
        let out = data.slice(this.props.pos.from, this.props.pos.to);
        if(out.length === 0) {
            return (
                <Alert color="info">
                    Not found!
                </Alert>);
        }
        return (
                <Table hover responsive className={'data-table'}>
                    <thead>
                    <tr>
                        {this.state.columns.map((item, index) => (
                            <th key={'header-'+index} onClick={() => this.sortBy(item)}>{item} <span className={[this.state.sort, this.state.sortBy === item ? 'active' : ''].join(' ')}></span></th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {out.map((item, index) => (
                        <tr key={'row-'+index} onClick={() => this.props.select(item)}>
                            {this.state.columns.map((key, index) => (
                                <th key={'col-'+index}>{item[key]}</th>
                            ))}
                        </tr>))}
                    </tbody>
                </Table>
        );

    }
}

export default SortedTable;
