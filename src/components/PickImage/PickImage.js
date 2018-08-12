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
import placeholderImage from '../../assets/beautiful-place.jpg';

class PickImage extends Component {
  render() {
    return (<View style={styles.container}>
      <View style={styles.placeholder}>
        <Image source={placeholderImage} style={styles.previewImage}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Pick Image" onPress={(e) => console.log(e)}/>
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
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
})

export default PickImage
