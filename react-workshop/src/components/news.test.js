import React from 'react';
import NewsList from './news';
import { shallow } from 'enzyme';

describe('News component', () => {
    it('search state is empty string', () => {
        const wrapper = shallow(<NewsList />)
        const searchState = wrapper.state().count
        expect(searchState).toEqual(0)
    })
})
