import React, { Component } from 'react';
import { Pagination, PaginationItem } from 'reactstrap';
import {Link} from "react-router-dom";

class Pagi extends Component {
    static defaultProps = {
        data: [],
        perPage: 50,
        current: 1,
        result: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.data.length <= this.props.perPage) return null;
        return (
            <div>
                <Pagination>
                    {Array((Math.ceil(this.props.data.length / this.props.perPage))).fill(1).map((x, i) =>
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
