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
            selectedItem: null
        };
        this.size = 32;
        this.filterResult = this.filterResult.bind(this);
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

    filterResult(data) {
        this.setState({
            work: data,
        });
    }

    selectItem(item) {
        this.setState({
            selectedItem: item,
        });
    }

    componentWillReceiveProps() {
        //if (!this.state.data) return null;
       // this.setState({
       //     work: this.props.data.slice(((this.props.match.params.number - 1) * 50), (this.props.match.params.number * 50) )
       // });
    }

    render() {
        //console.log(this.state.work)
        const data = this.state.work;

        if (!data) return <div>Loading</div>;
        //let tdata = this.state.work.slice(((this.props.match.params.number - 1) * 20), (this.props.match.params.number * 20));
        let pos = {from:(this.props.match.params.number - 1) * 20, to:(this.props.match.params.number * 20)};
        console.log(pos)
        return (
            <div>
                <Filter data={this.state.data} onComplite={this.filterResult} />
                <SortedTable data={data}
                             select={this.selectItem}
                             sorted={this.filterResult}
                             pos={pos} />
                <ItemInfo item={this.state.selectedItem}/>
                <Pagi count={this.state.data.length} data={this.state.work} current={this.props.match.params.number} result={this.filterResult}/>
            </div>
        );
    }
}

export default Main;
