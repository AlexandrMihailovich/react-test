import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SortedTable from './Table'
import Pagi from './Pagination'
import Filter from './Filter'
import ItemInfo from './ItemInfo'
import Load from './Load'
import { Alert } from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            work: null,
            value: '',
            selectedItem: null,
            perPage: 50,
            error: null,
            redirect: false
        };
        this.size = 32;
        this.result = this.result.bind(this);
        this.filterResult = this.filterResult.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    componentDidMount() {
        const URL = "http://www.filltext.com."+this.size+"&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({
                data: json,
                work: json
            });
        }).catch((error) => {
            this.setState({
                error: error
            });
        } );;
    }

    result(data) {
        this.setState({
            work: data
        });
    }

    filterResult(data) {
        let redirect = false;
        if(this.props.match.params.number) {
            redirect = true;
        }
        this.setState({
            work: data,
            redirect: redirect
        });
    }

    selectItem(item) {
        this.setState({
            selectedItem: item,
        });
    }

    render() {
        if (this.state.redirect) {
            this.setState({
                redirect: false
            });
            return (<Redirect to='/large'/>);
        }
        if(this.state.error) return (
            <div className={'row align-items-center justify-content-center full-height'}>
                <Alert color="danger">
                    {this.state.error.toString()}
                </Alert>
            </div>);

        const data = this.state.work;

        if (!data) return ( <Load/> );

        const page = !this.props.match.params.number ? 1 : this.props.match.params.number;
        const pos = {from:(page - 1) * this.state.perPage, to:(page * this.state.perPage)};
        return (
                <div className={'row justify-content-center'}>
                    <div className={'col'}>
                        <Filter data={this.state.data}
                                onComplite={this.filterResult} />
                        <SortedTable data={data}
                             select={this.selectItem}
                             sorted={this.result}
                             pos={pos} />
                        <ItemInfo item={this.state.selectedItem}/>
                        <Pagi data={this.state.work}
                              perPage={this.state.perPage}
                              result={this.result}/>
                        </div>
                        </div>
        );
    }
}

export default Main;
