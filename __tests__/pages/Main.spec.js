// __tests__/Main.js
import React from 'react'
import { ThemeProvider } from 'react-native-material-ui'
import Main from '../../src/pages/Main'

import renderer from 'react-test-renderer'

describe('Main.js', () => {
  let wrap
  beforeEach(() => {
    jest.resetModules
    wrap = (
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    )
  })

  it('renders', () => {
    const rendered = renderer.create(wrap).toJSON()
    expect(rendered).toBeTruthy()
  })
})
