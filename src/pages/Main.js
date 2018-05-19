import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, COLOR } from 'react-native-material-ui'

export default class Main extends React.Component {
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
      <View style={styles.container}>
        <Text>Testing 1,2,3...</Text>
        <Button primary raised text="A Button" onPress={this.buttonHandler} />
        {this.state.buttonPressed && <Text>A button was pressed!</Text>}
      </View>
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
