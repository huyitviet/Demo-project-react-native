import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
  


const CatItem = props => {
  const {element} = props;
  return (
    <View style={{ color: 'red'}}>
      <Text> ID: {element.id} </Text>
      <Text style={styles.element}> linkAvarta: {element.avatar} </Text>
      <Text style={styles.element}> createdAt: {element.createdAt} </Text>
      <Text style={styles.element}> Name {element.name} </Text>
      <Image source={{uri: element.avatar, width: 40, height: 40}} />
      <Text>---------------</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 20,
  },
  home: {
    color: 'white',
    textAlign: 'center',
  },
  element: {
    color: 'white',
  },
});
export default CatItem;