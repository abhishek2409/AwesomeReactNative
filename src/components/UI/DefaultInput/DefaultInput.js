import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const DefaultInput = props => (
  <TextInput   underlineColorAndroid="transparent" {...props} style={[styles.input, props.style]}/>
)

const styles = StyleSheet.create({
  input:{
    width:"100%",
    borderWidth:1,
    borderColor:"#eee",
    marginTop:8,
    marginBottom:8,
    padding:10
  }
})
export default DefaultInput;
