import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback, Platform, View, Text, StyleSheet} from 'react-native';

const ButtonWithBackground = props => {
  const content = (
    <View style={[styles.button, {backgroundColor:props.color}, props.disabled ? styles.disabled : null]}>
      <Text style={props.disabled ? styles.disabled : null}>{props.children}</Text>
    </View>
  );
  if(props.disabled){
    return content;
  }
  if(Platform.OS === "android"){
    return(
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return(
    <TouchableOpacity  onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    margin:8,
    padding:10,
    borderRadius:5
  },
  disabled:{
    backgroundColor:'#eee',
    borderColor:'#aaa'
  },
  disabledText:{
    color:'#aaa'
  }
})
export default ButtonWithBackground;
