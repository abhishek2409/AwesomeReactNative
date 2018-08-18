import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import {deletePlace} from '../../store/actions';

class PlaceDetail extends Component {
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
  deleteHandler = () => {
    this.props.onDeletePlace(this.props.selected.key);
    this.props.navigator.pop()
  }
  render() {
    const {selected} = this.props
    const {viewMode} = this.state
    return (<View style={[
        styles.container, viewMode === "portrait"
          ? styles.containerPortrait
          : styles.containerLandscape
      ]}>
      <View style={styles.subContainer}>
        <Image source={selected.image} style={styles.img}/>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.txt}>{selected.text}</Text>
        <TouchableOpacity onPress={this.deleteHandler}>
          <View style={styles.deletContainer}>
            <Icon name={Platform.OS === "android"
                ? "md-trash"
                : "ios-trash"} size={30} color="#900"/>
          </View>
        </TouchableOpacity>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  containerPortrait: {
    flexDirection: "column"
  },
  containerLandscape: {
    flexDirection: "row"
  },
  img: {
    width: "100%",
    height: 200
  },
  txt: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  deletContainer: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  }
})
const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}
export default connect(null, mapDispatchToProps)(PlaceDetail);
