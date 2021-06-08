import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addition, subtraction} from './store/actions';

const Counter = props => {
  const {navigation} = props;
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Adds" onPress={() => dispatch(addition())} />
      <Text>helloooooo ID {data}</Text>
      <Button title="Subtract" onPress={() => dispatch(subtraction())} />
      <Button
        title="Go to Counter2"
        onPress={() => navigation.navigate('Counter2')}
      />
    </View>
  );
};

export default Counter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
