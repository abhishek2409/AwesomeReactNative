import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class PlaceInput extends Component {
  state = {
    text: ''
  }
  _onChangeText = (text) => {
    this.setState({text})
  }
  _onPress = () => {
    const {text} = this.state
    if (text.trim() === "") {
      return
    }
    this.setState(prevState=>{
    return {text:""}
    })
    this.props.addHandler(text);
  }
  render() {
    return (<View style={styles.inputContainer}>
      <TextInput placeholder="An Awsome place" style={styles.placeInput} onChangeText={this._onChangeText} value={this.state.text}/>
      <Button style={styles.placeButton} onPress={this._onPress} title="Add" accessibilityLabel="Add more states"/>
    </View>);
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    // flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:10,
    alignItems: "center"
  },
  placeInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
})
