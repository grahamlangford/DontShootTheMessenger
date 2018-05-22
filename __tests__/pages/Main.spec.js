// __tests__/Main.js
import { React, shallow } from '../helpers/specHelper'
import { ToolbarAndroid } from 'react-native'
import Main from '../../src/pages/Main'

describe('Main.js', () => {
  let wrapper
  beforeEach(() => {
    jest.resetModules
    wrapper = shallow(<Main />)
  })

  it('renders', () => {
    expect(wrapper).toBeTruthy()
  })

  //   it('matches snapshot', () => {
  //     expect(wrapper).toMatchSnapshot()
  //   })

  it('has a toolbar', () => {
    expect(wrapper.find(ToolbarAndroid)).toHaveLength(1)
  })
})
