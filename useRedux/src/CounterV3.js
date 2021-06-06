import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {connect} from 'react-redux';

import {addition, subtraction, multiplication, division, reset} from './actions/action';

const Counter = (props) => {
  const {data, addition, subtraction, division, reset, multiplication} = props;

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => addition(data + 1)} />
      <Button title="Subtract" onPress={() => subtraction(data - 1)} />
      <Button title="Multiplication" onPress={() => multiplication(data * 10)} />
      <Text>{data}</Text>
      <Button title="Division" onPress={() => division(data / 2)} />
      <Button title="Reset" onPress={() => reset(0)} />
    </View>
  );
};

const mapStatetoProps = (state) => {
  return {
    data: state.countModel.counter,
  };
};

export default connect(mapStatetoProps, {multiplication, division, addition, subtraction, reset})(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
