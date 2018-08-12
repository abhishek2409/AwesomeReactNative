import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import HeadingText from "../../components/UI/HeadingText/HeadingText";

class SharePlaceScreen extends Component {
  state = {
    text:""
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
  _onChangeText = (val) =>{
    this.setState({
      text:val
    })
  }

  _onPress = () => {
    const {text} = this.state
    if (text.trim() === "") {
      return
    }
    this.setState(prevState=>{
    return {text:""}
    })
    this.props.onAddPlace(text);
  }

  render() {
    return (<ScrollView>
      <View style={styles.container}>
        <MainText>
          <HeadingText>Share a place with us!</HeadingText>
        </MainText>
        <PickImage/>
        <PickLocation/>
        <PlaceInput placeName={this.state.text} onChangeText={this._onChangeText}/>
        <View style={styles.buttonContainer}>
          <Button title="Share the Place!" onPress={this._onPress}/>
        </View>
      </View>
    </ScrollView>)
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
