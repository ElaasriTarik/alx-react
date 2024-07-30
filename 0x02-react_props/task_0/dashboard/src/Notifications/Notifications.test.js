import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });
    test('Notifications renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
    test('Notifications renders the text "Here is the list of notifications"', () => {
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });
    test('Notifications renders three list items', () => {
        expect(wrapper.find('li').length).toBe(3);
    });
});
