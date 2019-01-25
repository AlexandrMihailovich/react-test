import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Main from './components/Main'
import Filter from './components/Filter'
import SortedTable from './components/Table'
import Pagi from './components/Pagination'
import ItemInfo from './components/ItemInfo'
import 'jest-enzyme';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import {Switch, Route, HashRouter} from 'react-router-dom';


configure({ adapter: new Adapter() });

it('renders app', () => {
  shallow(<App />);
  render(<App />);
});

it('renders Main', () => {
  shallow(<Main />);
  render(<Main />);
});

it('renders filter', () => {
  shallow(<Filter />);
  render(<Filter />);

});
it('renders table', () => {
  shallow(<SortedTable />);
  render(<SortedTable />);

});
it('renders pagi', () => {
  shallow(<Pagi />);
  render(<Pagi />);

});
it('renders ItemInfo', () => {
  shallow(<ItemInfo />);
  render(<ItemInfo />);

});
