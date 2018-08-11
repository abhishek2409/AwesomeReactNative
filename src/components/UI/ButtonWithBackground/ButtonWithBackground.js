import React from 'react';
import {TouchableOpacity,View, Text, StyleSheet} from 'react-native';

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor:props.color}]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button:{
    margin:8,
    padding:10,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5
  }
})
export default ButtonWithBackground;
