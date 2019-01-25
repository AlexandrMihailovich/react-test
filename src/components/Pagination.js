import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {Link} from "react-router-dom";

class Pagi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            itemCount: this.props.count,
            currentPage: this.props.current,
            perPage: 20,
            pageCount: this.props.count / 20
        };
    }

    render() {
        console.log(this.props.data)
        if (this.props.data.length <= this.state.perPage) return null;
        return (
            <div>
                <Pagination>
                    {Array((Math.ceil(this.props.data.length / 20))).fill(1).map((x, i) =>
                        (<PaginationItem key={'page-'+i} >
                            <Link to={`/large/${i+1}`} className={'page-link'}>
                                {i+1}
                            </Link>
                        </PaginationItem>)
                    )}
                </Pagination>
            </div>
        );

    }
}


export default Pagi;
