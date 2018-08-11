import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
  onPressHandler() {
    startTabs();
  }
  render() {
    return (<ImageBackground source={backgroundImage} style={styles.backgroundStyle}>
      <View style={styles.container}>
        <MainText>
          <HeadingText>Please Login</HeadingText>
        </MainText>
        <ButtonWithBackground color="#29aaf4">Switch to Login</ButtonWithBackground>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Email Address" style={styles.input}/>
          <DefaultInput placeholder="Password" style={styles.input}/>
          <DefaultInput placeholder="Confirm Password" style={styles.input}/>
        </View>
        <ButtonWithBackground color="#29aaf4" onPress={this.onPressHandler}>Submit</ButtonWithBackground>
      </View>
    </ImageBackground>)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundStyle: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: '80%'
  },
  input:{
    backgroundColor:'white'
  }
})
export default AuthScreen;
