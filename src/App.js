import React, { Component } from 'react';
import SortedTable from './Table'
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      value: '',
    };

  }
  componentDidMount() {
    const URL = "http://www.filltext.com/?rows=30&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({
        data: json,
      });
    });
  }


  render() {
    const data = this.state.data;
    if (!data) return <div>Loading</div>;
    return (
        <div id="app">
          <SortedTable data={data} />
        </div>
    );
  }
}

export default App;
