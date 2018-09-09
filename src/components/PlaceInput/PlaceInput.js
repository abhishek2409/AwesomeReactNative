import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
  <DefaultInput valid={props.placeData.valid} touched={props.placeData.touched} placeholder="Place Name" value={props.placeData.value} onChangeText={props.onChangeText}/>
)

export default placeInput
