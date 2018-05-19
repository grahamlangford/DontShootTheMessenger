import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-material-ui'
import Main from './src/pages/Main'
import uiTheme from './src/uiTheme'

if (typeof global.self === 'undefined') global.self = global

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.buttonHandler = this.buttonHandler.bind(this)
    this.state = {
      buttonPressed: false
    }
  }

  buttonHandler = () => {
    this.setState((prevState) => {
      return { buttonPressed: !prevState.buttonPressed }
    })
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Main />
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
