// __tests__/atoms/Contact.js
import { Text } from 'react-native'
import Contact from '../../src/atoms/Contact'
import { React, shallow } from '../helpers/specHelper'

describe('Contact.js', () => {
  let wrapper
  const onPressMock = jest.fn()
  const item = 'Picard'
  beforeEach(() => {
    jest.resetModules
    wrapper = shallow(<Contact onPress={onPressMock} item={item} />)
  })

  it('renders', () => {
    expect(wrapper).toBeTruthy()
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
