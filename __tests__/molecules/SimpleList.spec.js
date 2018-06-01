// __tests__/molecules/SimpleList.js
import { Text } from 'react-native'
import SimpleList from '../../src/molecules/SimpleList'
import Contact from '../../src/atoms/Contact'
import { React, shallow } from '../helpers/specHelper'

describe('SimpleList.js', () => {
  let wrapper
  const itemClickHandlerMock = jest.fn()
  const items = ['Picard', 'Riker', 'Data', 'Troi', 'La Forge', 'Worf']
  beforeEach(() => {
    jest.resetModules
    wrapper = shallow(
      <SimpleList itemClickHandler={itemClickHandlerMock} items={items} />
    )
  })

  it('renders', () => {
    expect(wrapper).toBeTruthy()
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
