import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height < 500
      ? "landscape"
      : "portrait"
  }
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles)
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles)
  }
  updateStyles = (dims) => {
    this.setState({
      viewMode: dims.window.height < 500
        ? "landscape"
        : "portrait"
    })
  }
  onPressHandler() {
    startTabs();
  }
  render() {
    const {viewMode} = this.state
    let headingText = null;
    if (viewMode === "portrait") {
      headingText = (<MainText>
        <HeadingText>Please Login</HeadingText>
      </MainText>)
    }
    return (<ImageBackground source={backgroundImage} style={styles.backgroundStyle}>
      <View style={styles.container}>
        {headingText}
        <ButtonWithBackground color="#29aaf4">Switch to Login</ButtonWithBackground>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Email Address" style={styles.input}/>
          <View style={viewMode === "portrait"
              ? styles.passwordContainerPortrait
              : styles.passwordContainerLandscape}>
            <View style={viewMode === "portrait"
                ? styles.passwordWrapperPortrait
                : styles.passwordWrapperLandscape}>
              <DefaultInput placeholder="Password" style={styles.input}/>
            </View>
            <View style={viewMode === "portrait"
                ? styles.passwordWrapperPortrait
                : styles.passwordWrapperLandscape}>
              <DefaultInput placeholder="Confirm Password" style={styles.input}/>
            </View>
          </View>
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
  input: {
    backgroundColor: 'white'
  },
  passwordContainerPortrait: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  passwordContainerLandscape: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  passwordWrapperLandscape: {
    width: "45%"
  },
  passwordWrapperPortrait: {
    width: "100%"
  }
})
export default AuthScreen;
