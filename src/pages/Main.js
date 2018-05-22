import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ToolbarAndroid
} from 'react-native'
import colors from '../colors'

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
        <ToolbarAndroid
          title="home"
          style={styles.toolbar}
          titleColor="white"
        />
        <View style={styles.body}>
          <Text>Testing 1,2,3...</Text>
          <Button
            title="A different Button"
            onPress={this.buttonHandler}
            color={colors.primary}
          />
          {this.state.buttonPressed && <Text>A button was pressed!</Text>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  body: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbar: {
    height: 56,
    backgroundColor: colors.primary,
    marginTop: StatusBar.currentHeight
  }
})
