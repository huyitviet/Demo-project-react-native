import React from 'react';
import { View, Text } from 'react-native';
const Cat = props => {
  return (
    <View style={{padding: 40, backgroundColor: 'green'}}>
      <Text style={{color: 'white'}}>{props.ten}</Text>
    </View>
  );
};
export default Cat;
