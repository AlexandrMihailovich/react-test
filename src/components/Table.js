import React, { Component } from 'react';
import { Table } from 'reactstrap';


class SortedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data: props.data,
            sort: 'ASC',
            sortBy: null,
            columns: ['id', 'firstName', 'lastName', 'email', 'phone'],
            pos: props.pos
            //selected: null
        };
        this.sortBy = this.sortBy.bind(this);
        this.compareBy = this.compareBy.bind(this);
        //this.selectRow = this.selectRow.bind(this);
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
            //data: arrayCopy,
            sort: sort,
            sortBy: key
        });
        this.props.sorted(arrayCopy);
    }

   //componentWillReceiveProps() {
   //    this.setState({
   //        data: this.props.data
   //    });
    //    this.setState({
    //        data: this.props.data.slice(((this.props.match.params.number - 1) * 50), (this.props.match.params.number * 50) )
    //    });
        //console.log(this.state.data)
    //}

    //selectRow(index) {
    //    this.setState({
    //        selected: this.state.data[index],
    //    });
    //}

    render() {
        //console.log(this.props)
        let data = this.props.data;
        return (
            <div>
                <Table hover responsive className={'data-table'}>
                    <thead>
                    <tr>
                        {this.state.columns.map((item, index) => (
                            <th key={'header-'+index} onClick={() => this.sortBy(item)}>{item} <span className={[this.state.sort, this.state.sortBy === item ? 'active' : ''].join(' ')}></span></th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.slice(this.props.pos.from, this.props.pos.to).map((item, index) => (
                        <tr key={'row-'+index} onClick={() => this.props.select(item)}>
                            {this.state.columns.map((key, index) => (
                                <th key={'col-'+index}>{item[key]}</th>
                            ))}
                        </tr>))}
                    </tbody>
                </Table>
            </div>
        );

    }
}


export default SortedTable;
