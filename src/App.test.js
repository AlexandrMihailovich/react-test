import React from 'react';
import App from './App';
import Main from './components/Main'
import Filter from './components/Filter'
import SortedTable from './components/Table'
import Pagi from './components/Pagination'
import ItemInfo from './components/ItemInfo'


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'react-testing-library';

/*
import 'jest-enzyme';

import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
*/

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
