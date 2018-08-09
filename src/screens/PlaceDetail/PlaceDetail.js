import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import {deletePlace} from '../../store/actions';

class PlaceDetail extends Component{
  deleteHandler = () =>{
    this.props.onDeletePlace(this.props.selected.key);
    this.props.navigator.pop()
  }
  render(){
    const {selected} = this.props
    return (<View style={styles.container}>
      <Image source={selected.image} style={styles.img}/>
      <Text style={styles.txt}>{selected.text}</Text>
      <View>
        <TouchableOpacity onPress={this.deleteHandler}>
          <View style={styles.deletContainer}>
            <Icon name="ios-trash" size={30} color="#900"/>
          </View>
        </TouchableOpacity>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
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
  }
})
const mapDispatchToProps = dispatch =>{
  return{
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}
export default connect(null,mapDispatchToProps)(PlaceDetail);
