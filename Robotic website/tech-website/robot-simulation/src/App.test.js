import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`should place a robot correctly on valid point on the table`, async () => {
  const wrapper = shallow(<App />)
  await wrapper.instance().handlePlaceRobot(0,1,0)
  expect(wrapper.state().isPlaced).toEqual(true);
  expect(wrapper.state().X).toEqual(0);
  expect(wrapper.state().Y).toEqual(1);
  expect(wrapper.state().F).toEqual(0);
})

test(`should not place robot on invalid point on the table`, async () => {
  const wrapper = shallow(<App />)
  await wrapper.instance().handlePlaceRobot(5,5,0)
  expect(wrapper.state().isPlaced).toEqual(false);
})

test(`should not execute left direction command before placement on the table`, async () => {
  const wrapper = shallow(<App />)
  const bool = wrapper.instance().handleLeftCommand()
  expect(bool).toEqual(false);
})

test(`should not execute right direction command before placement on the table`, async () => {
  const wrapper = shallow(<App />)
  const bool = wrapper.instance().handleRightCommand()
  expect(bool).toEqual(false);
})

test(`should not execute move command before placement on the table`, async () => {
  const wrapper = shallow(<App />)
  const bool = wrapper.instance().handleMoveCommand()
  expect(bool).toEqual(false);
})

test(`should be able to execute commands after valid robot placement`, async () => {
  const wrapper = shallow(<App />)
  await wrapper.instance().handlePlaceRobot(0,1,0)
  const bool = wrapper.instance().handleLeftCommand()
  expect(bool).toEqual(true);
})