import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-material-ui";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      buttonPressed: false
    };
  }

  buttonHandler = () => {
    this.setState(prevState => {
      return { buttonPressed: !prevState.buttonPressed };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Testing 1,2,3...</Text>
        <Button accent title="A Button" onPress={this.buttonHandler} />
        {this.state.buttonPressed && <Text>A button was pressed!</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
