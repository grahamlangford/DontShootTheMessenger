import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Main from './src/pages/Main'

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
    return <Main />
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
