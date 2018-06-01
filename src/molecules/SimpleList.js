import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import Contact from '../atoms/Contact'

const SimpleList = ({ itemClickHandler, items }) => {
  return (
    <View style={styles.body}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Contact onPress={itemClickHandler} item={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    height: 48,
    width: Dimensions.get('window').width,
    textAlignVertical: 'center',
    paddingLeft: 16
  }
})

SimpleList.propTypes = {
  itemClickHandler: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default SimpleList
