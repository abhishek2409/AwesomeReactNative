import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "SideDrawerToggle") {
      this.props.navigator.toggleDrawer({side: "left"});
    }
  }

  selectHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key
    });

    this.props.navigator.push({
      screen: "awesome-reactnative.PlaceDetailScreen",
      title: selPlace.text,
      passProps: {
        selected: selPlace
      }
    })
  }

  render() {
    return (<View>
      <PlaceList places={this.props.places} onItemSelected={this.selectHandler}/>
    </View>)
  }
}
const mapStateToProps = state => {
  return {places: state.places.places}
}
export default connect(mapStateToProps, null)(FindPlaceScreen);
