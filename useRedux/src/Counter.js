import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';

import {addition, subtraction} from './action/action';

const Counter = (props) => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => dispatch(addition())} />
      <Text>{data}</Text>
      <Button title="Subtract" onPress={() => dispatch(subtraction())}/>;
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
