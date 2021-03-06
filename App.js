/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, {Component} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import PlaceInput from './src/components/PlaceInput/PlaceInput'
// import PlaceList from './src/components/PlaceList/PlaceList'
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
// import {connect} from 'react-redux';
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace
// }
// from './src/store/actions';
//
// class App extends Component {
//
//   _addHandler = text => {
//     this.props.onAddPlace(text);
//   }
//   _onItemSelected = key => {
//     this.props.onSelectPlace(key)
//   }
//   _onModalClose = () => {
//     this.props.onDeselectPlace()
//   }
//   _onDelete = () => {
//     this.props.onDeletePlace()
//   }
//
//   render() {
//     const {selected, places} = this.props
//     return (<View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to React Native!
//       </Text>
//       <PlaceDetail selected={selected} onDelete={this._onDelete} onModalClose={this._onModalClose}/>
//       <PlaceInput addHandler={this._addHandler}/>
//       <PlaceList places={places} onItemSelected={this._onItemSelected}/>
//     </View>);
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     marginTop: 50
//   }
// });
//
// const mapStateToProps = (state) => {
//   return {places: state.places.places, selected: state.places.selected}
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
//
//
//
//
import {Provider} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';
const store = configureStore()

// Register Screen
Navigation.registerComponent("awesome-reactnative.AuthScreen",()=>AuthScreen, store, Provider);
Navigation.registerComponent("awesome-reactnative.SharePlaceScreen",()=>SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-reactnative.FindPlaceScreen",()=>FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-reactnative.PlaceDetailScreen",()=>PlaceDetailScreen, store, Provider);
Navigation.registerComponent("awesome-reactnative.SideDrawerScreen",()=>SideDrawerScreen);



// Start App
Navigation.startSingleScreenApp({
  screen:{
    screen:"awesome-reactnative.AuthScreen",
    title: 'Login',
  }
})
