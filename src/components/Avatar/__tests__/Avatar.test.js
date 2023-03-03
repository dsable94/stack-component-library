
import React from 'react';
import {  shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';

// describe('***--- Avatar Component --- ***', () => {
//   it('test', () => {
//     expect(1).toEqual(1);
//   });
// });

describe('Connections Table', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <Avatar />,
    );
  });
  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Avatar />)
  //   //   <CmsContext.Provider value={cmsContextValue}>
  //   //     <FeatureComponent {...props} />
  //   //   </CmsContext.Provider>,
  //   // ).dive().dive().dive();
  // });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
    console.log('-----------', wrapper.debug());
  });

//   it('Simulate mutation onClick on Button', async () => {
//     wrapper.find('#header').simulate('click');
//   });
});
