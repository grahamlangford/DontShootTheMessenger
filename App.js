import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, COLOR, ThemeProvider } from "react-native-material-ui";

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  }
};

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
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <Text>Testing 1,2,3...</Text>
          <Button primary raised text="A Button" onPress={this.buttonHandler} />
          {this.state.buttonPressed && <Text>A button was pressed!</Text>}
        </View>
      </ThemeProvider>
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
