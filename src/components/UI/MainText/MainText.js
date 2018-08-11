import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MainText = props => (
  <Text style={styles.text}>{props.children}</Text>
)

const styles = StyleSheet.create({
  text:{
    color:'#444',
    backgroundColor:'transparent'
  }
})
export default MainText;
