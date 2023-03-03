import React from 'react';
import {  shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '../Avatar';

describe('Connections Table', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <Avatar />,
    );
  });
  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
    // console.log('-----------', wrapper.debug());
  });
});
