import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const Contact = ({ onPress, item }) => {
  return (
    <Text style={styles.listItem} onPress={() => onPress(item)}>
      {item}
    </Text>
  )
}

const styles = StyleSheet.create({
  listItem: {
    height: 48,
    width: Dimensions.get('window').width,
    textAlignVertical: 'center',
    paddingLeft: 16
  }
})

Contact.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired
}

export default Contact
