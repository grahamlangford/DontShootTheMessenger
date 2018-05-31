// __tests__/organisms/SimpleList.js
import { FlatList, Text } from 'react-native'
import SimpleList from '../../src/organisms/SimpleList'
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
})
