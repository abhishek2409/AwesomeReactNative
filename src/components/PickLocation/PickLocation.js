import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

class PickLocation extends Component {
  render() {
    return (<View style={styles.container}>
      <View style={styles.placeholder}>
        <Text>Map</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Locate Me" onPress={(e)=> console.log(e)}/>
      </View>
    </View>)
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#444",
    width: "80%",
    height: 150
  },
  buttonContainer: {
    margin: 8
  }
})

export default PickLocation
