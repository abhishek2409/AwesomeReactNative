import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

const ListItem = (props) => (
  <TouchableOpacity onPress={props.pressedItem}>
    <View style={styles.listItem}>
      <Image source={props.img} style={styles.img}/>
      <Text>{props.txt}</Text>
    </View>
</TouchableOpacity>
)
const styles = StyleSheet.create({
  listItem:{
    width:"100%",
    backgroundColor:"#eee",
    padding:10,
    marginBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  img:{
    marginRight:8,
    width:50,
    height:50
  }
})

export default ListItem;
