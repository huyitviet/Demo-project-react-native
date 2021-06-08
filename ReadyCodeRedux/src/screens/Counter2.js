import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {multiplication, division} from '../store/actions';

const Counter2 = props => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Multiplicate" onPress={() => dispatch(multiplication())} />
      <Text>helloooooo ID {data}</Text>
      <Button title="divite" onPress={() => dispatch(division())} />
    </View>
  );
};

export default Counter2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
