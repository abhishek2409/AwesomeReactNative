import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Animated
} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#ff9900'
  }

  state = {
    dataLoaded: false,
    removeAnim: new Animated.Value(1),
    placesAnim: new Animated.Value(0)
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  placeSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({dataLoaded: true});
      this.placesLoadedHandler();
    });
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
    let content = (<Animated.View style={{
        opacity: this.state.removeAnim,
        transform: [
          {
            scale: this.state.removeAnim.interpolate({
              inputRange: [
                0, 1
              ],
              outputRange: [12, 1]
            })
          }
        ]
      }}>
      <TouchableOpacity onPress={this.placeSearchHandler}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find Places</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>)
    if (this.state.dataLoaded) {
      content = (<Animated.View style={{
          opacity: this.state.placesAnim
        }}>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
      </Animated.View>)
    }
    return (<View style={this.state.dataLoaded
        ? null
        : styles.buttonContainer}>
      {content}
    </View>)
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    borderRadius: 50,
    borderColor: "orange",
    padding: 20,
    borderWidth: 3
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {places: state.places.places}
}
export default connect(mapStateToProps, null)(FindPlaceScreen);
