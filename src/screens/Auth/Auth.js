import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  onPressHandler(){
    startTabs();
  }
  render(){
    return(
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.onPressHandler} />
      </View>
    )
  }
}
export default AuthScreen;
