import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {
  renderListItems = (item) => { return <ListItem txt={item.text} img={item.image} pressedItem={()=>props.onItemSelected(item.key)}/>}
  return (<FlatList style={styles.listContainer}
    data={props.places}
    renderItem={({item})=>this.renderListItems(item)}
    />);
}
const styles = StyleSheet.create({

  listContainer: {
    width: "100%"
  }
})

export default PlaceList;
