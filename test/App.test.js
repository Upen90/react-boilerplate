import App from '..src/components/App.js'
import React from 'react'
import {shallow} from 'enzyme'

describe('App',()=>{
    test('should match snapshot',()=>{
        const wrapper= shallow(<App/>)
        expect(wrapper.find('h1').text()).toBe('Welcome to my app')
        expect(wrapper).toMatchSnapshot

    })
})