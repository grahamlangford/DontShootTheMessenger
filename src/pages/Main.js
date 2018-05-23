import React from 'react'
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View
} from 'react-native'
import menuIcon from '../assets/icons/menu-icon.png'
import colors from '../colors'

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ['John', 'Paul', 'George', 'Ringo']
    }
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
        />
        <View style={styles.body}>
          <FlatList
            data={this.state.items}
            renderItem={({ item }) => (
              <Text style={styles.listItem}>{item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
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
  },
  listItem: {
    height: 48,
    textAlignVertical: 'center'
  }
})
