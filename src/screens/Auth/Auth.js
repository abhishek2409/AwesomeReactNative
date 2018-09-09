import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';
import {validate} from '../../utility/validations';
import {connect} from 'react-redux';
import {tryAuth} from '../../store/actions';

class AuthScreen extends Component {
  state = {
    authMode: "login",
    viewMode: Dimensions.get('window').height < 500
      ? "landscape"
      : "portrait",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equaltTo: "password"
        },
        touched: false
      }
    }
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
  onPressHandler = () => {
    const {
      controls: {
        email,
        password
      }
    } = this.state
    const authData = {
      email: email.value,
      password: password.value
    }
    this.props.tryAuth(authData);
    startTabs();
  }
  switchAuthMode = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === "login"
          ? "signup"
          : "login"
      }
    })
  }

  updateInputState = (key, value) => {
    let connectedVal = {}
    if (this.state.controls[key].validationRules.equaltTo) {
      const equalControl = this.state.controls[key].validationRules.equaltTo;
      const equalVal = this.state.controls[equalControl].value;
      connectedVal = {
        ...connectedVal,
        equaltTo: equalVal
      }
    }
    if (key === 'password') {
      connectedVal = {
        ...connectedVal,
        equaltTo: value
      }
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === "password"
              ? validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedVal)
              : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value,
            touched: true,
            valid: validate(value, prevState.controls[key].validationRules, connectedVal)
          }
        }
      }
    })
  }
  render() {
    const {viewMode, authMode} = this.state
    let headingText = null;
    if (viewMode === "portrait") {
      headingText = (<MainText>
        <HeadingText>Please {
            authMode === "login"
              ? "Login"
              : "Signup"
          }</HeadingText>
      </MainText>)
    }
    return (<ImageBackground source={backgroundImage} style={styles.backgroundStyle}>
      <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
        {headingText}
        <ButtonWithBackground color="orange" onPress={this.switchAuthMode}>Switch to {
            authMode === "login"
              ? "Signup"
              : "Login"
          }</ButtonWithBackground>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
          <DefaultInput autoCapitalize={"none"} autoCorrect={false} keyboardType={"email-address"} placeholder="Email Address" touched={this.state.controls.email.touched} valid={this.state.controls.email.valid} style={styles.input} value={this.state.controls.email.value} onChangeText={(val) => this.updateInputState("email", val)}/>
          <View style={viewMode === "portrait" || authMode === "login"
              ? styles.passwordContainerPortrait
              : styles.passwordContainerLandscape}>
            <View style={viewMode === "portrait" || authMode === "login"
                ? styles.passwordWrapperPortrait
                : styles.passwordWrapperLandscape}>
              <DefaultInput secureTextEntry={true} placeholder="Password" touched={this.state.controls.password.touched} valid={this.state.controls.password.valid} style={styles.input} value={this.state.controls.password.value} onChangeText={(val) => this.updateInputState("password", val)}/>
            </View>
            {
              authMode === "signup"
                ? (<View style={viewMode === "portrait"
                    ? styles.passwordWrapperPortrait
                    : styles.passwordWrapperLandscape}>
                  <DefaultInput secureTextEntry={true} touched={this.state.controls.confirmPassword.touched} valid={this.state.controls.confirmPassword.valid} value={this.state.controls.confirmPassword.value} onChangeText={(val) => this.updateInputState("confirmPassword", val)} placeholder="Confirm Password" style={styles.input}/>
                </View>)
                : null
            }
          </View>
        </View>
        </TouchableWithoutFeedback>
        <ButtonWithBackground disabled={
            (!this.state.controls.confirmPassword.valid && authMode === "signup") || (!this.state.controls.password.valid) || (!this.state.controls.email.valid)
          } color="orange" onPress={this.onPressHandler}>Submit</ButtonWithBackground>
      </KeyboardAvoidingView>
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

const mapDispatchToProps = (dispatch) => {
  return {
    tryAuth: (authData) => dispatch(tryAuth(authData))
  }
}

export default connect(null, mapDispatchToProps)(AuthScreen);
