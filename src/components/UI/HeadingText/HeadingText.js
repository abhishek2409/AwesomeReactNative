import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeadingText = props => (
  <Text {...props} style={[styles.text, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
  text:{
    fontSize:28,
    fontWeight:'bold'
  }
})
export default HeadingText;
