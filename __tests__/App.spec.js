// __tests__/App.js
import React from 'react'
import App from '../App'

import renderer from 'react-test-renderer'

describe('App.js', () => {
  it('renders', () => {
    const rendered = renderer.create(<App />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
