// __tests__/pages/Main.js
import { FlatList, ToolbarAndroid } from 'react-native'
import Main from '../../src/pages/Main'
import SimpleList from '../../src/organisms/SimpleList'
import { React, shallow } from '../helpers/specHelper'

describe('Main.js', () => {
  let wrapper
  beforeEach(() => {
    jest.resetModules
    wrapper = shallow(<Main />)
  })

  it('renders', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('the toolbar', () => {
    let toolbar
    beforeEach(() => {
      toolbar = wrapper.find(ToolbarAndroid)
    })

    it('renders', () => {
      expect(toolbar).toHaveLength(1)
    })

    it('has the title "home"', () => {
      expect(toolbar.prop('title')).toEqual('home')
    })

    it('has a navIcon', () => {
      expect(toolbar.prop('navIcon')).toBeTruthy()
    })
  })

  describe('the simplelist', () => {
    let simpleList
    beforeEach(() => {
      simpleList = wrapper.find(SimpleList)
    })
  })
})
