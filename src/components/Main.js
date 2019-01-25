import React, { Component } from 'react';
import SortedTable from './Table'
import Pagi from './Pagination'
import {Route, Switch} from "react-router-dom";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            value: '',
        };
        this.size = 32;
    }
    componentDidMount() {
        const URL = "http://www.filltext.com/?rows="+this.size+"&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({
                data: json,
            });
        });
    }

    render() {
        //console.log(this.props)
        const data = this.state.data;
        if (!data) return <div>Loading</div>;
        return (
            <div>
                <Switch>
                    <Route path='/small'
                           render={(props) => <SortedTable {...props} data={data} />} />
                    <Route exact path='/large'
                           render={(props) => <SortedTable {...props} data={data} />} />
                    <Route path='/large/:number'
                           render={(props) => <SortedTable {...props} data={data} />} />
                </Switch>
                <Pagi count={data.length}/>
            </div>
        );
    }
}

export default Main;
