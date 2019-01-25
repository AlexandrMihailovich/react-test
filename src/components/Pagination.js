import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {Link} from "react-router-dom";

class Pagi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: this.props.count,
            currentPage: 1,
            perPage: 50,
            pageCount: this.props.count / 50
        };
        this.selectPage = this.selectPage.bind(this);
    }

    selectPage(page) {

    }

    render() {
        if (this.state.itemCount <= this.state.perPage) return null;
        return (
            <div>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    {Array(this.state.pageCount).fill(1).map((x, i) =>
                        (<PaginationItem key={'page-'+i}>
                            <Link to={`/large/${i+1}`} className={'page-link'}>
                                {i+1}
                            </Link>
                        </PaginationItem>)
                    )}
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        );

    }
}


export default Pagi;
