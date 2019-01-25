import React, { Component } from 'react';
import SortedTable from './Table'
import Pagi from './Pagination'
import Filter from './Filter'
import ItemInfo from './ItemInfo'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            work: null,
            value: '',
            selectedItem: null,
            perPage: 50
        };
        this.size = 32;
        this.result = this.result.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    componentDidMount() {
        const URL = "http://www.filltext.com/?rows="+this.size+"&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({
                data: json,
                work: json
            });
        });
    }

    result(data) {
        this.setState({
            work: data,
        });
    }

    selectItem(item) {
        this.setState({
            selectedItem: item,
        });
    }

    render() {
        const data = this.state.work;
        if (!data) return (
                <div className={'row align-items-center justify-content-center full-height'}>
                    <div id="fountainG">
                        <div id="fountainG_1" className={"fountainG"}></div>
                        <div id="fountainG_2" className={"fountainG"}></div>
                        <div id="fountainG_3" className={"fountainG"}></div>
                        <div id="fountainG_4" className={"fountainG"}></div>
                        <div id="fountainG_5" className={"fountainG"}></div>
                        <div id="fountainG_6" className={"fountainG"}></div>
                        <div id="fountainG_7" className={"fountainG"}></div>
                        <div id="fountainG_8" className={"fountainG"}></div>
                    </div>
                </div>);

        let page = !this.props.match.params.number ? 1 : this.props.match.params.number;
        let pos = {from:(page - 1) * this.state.perPage, to:(page * this.state.perPage)};
        return (
                <div className={'row justify-content-center'}>
                    <div className={'col'}>
                        <Filter data={this.state.data}
                                onComplite={this.result} />
                        <SortedTable data={data}
                             select={this.selectItem}
                             sorted={this.result}
                             pos={pos} />
                        <ItemInfo item={this.state.selectedItem}/>
                        <Pagi count={this.state.data.length}
                              data={this.state.work}
                              perPage={this.state.perPage}
                              current={page}
                              result={this.result}/>
                        </div>
                        </div>
        );
    }
}

export default Main;
