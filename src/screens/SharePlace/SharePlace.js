import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import {validate} from '../../utility/validations';

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#ff9900',
  };

  state = {
    controls:{
      placeName:{
        value:"",
        valid:false,
        touched:false,
        validationRules:{
          notEmpty:true
        }
      }
    }
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "SideDrawerToggle") {
      this.props.navigator.toggleDrawer({side: "left"});
    }
  }
  _onChangeText = (value) =>{
    this.setState(prevState=>{
      return{
        controls:{
          ...prevState.controls,
          placeName:{
            ...prevState.controls.placeName,
            value,
            valid:validate(value, prevState.controls.placeName.validationRules),
            touched:true
          }
        }
      }
    })
  }

  _onPress = () => {
    const {controls:{placeName:{value}}} = this.state
    if (value.trim() === "") {
      return
    }
    this.setState(prevState=>{
      return{
        controls:{
          ...prevState.controls,
          placeName:{
            ...prevState.controls.placeName,
            value:"",
            touched:false,
            valid:false
          }
        }
      }
    })
    this.props.onAddPlace(value);
  }

  render() {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset={100} style={styles.container} behavior={"padding"}>
        <ScrollView>
        <MainText>
          <HeadingText>Share a place with us!</HeadingText>
        </MainText>
        <PickImage/>
        <PickLocation/>
        <PlaceInput placeData={this.state.controls.placeName} onChangeText={this._onChangeText}/>
        <View style={styles.buttonContainer}>
          <Button disabled={!this.state.controls.placeName.valid} title="Share the Place!" onPress={this._onPress}/>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttonContainer: {
    margin: 8
  }
});
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
