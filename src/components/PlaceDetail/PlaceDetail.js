import React from 'react';
import {
  Modal,
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = ({selected, onDelete, onModalClose}) => {
  let modalContent = null;
  if (selected) {
    modalContent = (<View>
      <Image source={selected.image} style={styles.img}/>
      <Text style={styles.txt}>{selected.text}</Text>
    </View>)
  }
  return (<Modal visible={selected !== null} animationType={'slide'} onRequestClose={() => onModalClose}>
    <View style={styles.modalContaner}>
      {modalContent}
      <View>
        <TouchableOpacity onPress={onDelete}>
          <View style={styles.deletContainer}>
            <Icon name="ios-trash" size={30} color="#900" />
          </View>
        </TouchableOpacity>
        <Button title="Close" onPress={onModalClose}/>
      </View>
    </View>
  </Modal>);
}
const styles = StyleSheet.create({
  modalContaner:{
    margin:22
  },
  img:{
    width:"100%",
    height:200
  },
  txt:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10
  },
  deletContainer:{
    alignItems:"center"
  }
})

export default placeDetail;
