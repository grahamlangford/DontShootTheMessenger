import React from 'react'
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View
} from 'react-native'
import SimpleList from '../molecules/SimpleList'
import menuIcon from '../assets/icons/menu-icon.png'
import colors from '../colors'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.textPressHandler = this.textPressHandler.bind(this)
    this.navIconHandler = this.navIconHandler.bind(this)
    this.state = {
      items: ['John', 'Paul', 'George', 'Ringo']
    }
  }

  textPressHandler(item) {
    console.log(item, 'got pressed')
  }

  navIconHandler() {
    console.log('The Menu Button was pressed!')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.darkPrimary} />
        <ToolbarAndroid
          title="home"
          style={styles.toolbar}
          titleColor="white"
          navIcon={menuIcon}
          onIconClicked={this.navIconHandler}
        />
        <SimpleList
          itemClickHandler={this.textPressHandler}
          items={this.state.items}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  toolbar: {
    height: 56,
    backgroundColor: colors.primary,
    marginTop: StatusBar.currentHeight
  }
})
