import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {connect} from 'react-redux';

import {addition, subtraction} from './actions/action';

const Counter = (props) => {

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => props.addition()} />
      <Text>{props.data}</Text>
      <Button title="Subtract" onPress={() => props.subtraction()} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return (
    {
     data: state.counter,
    }
  )
}

export default connect(mapStateToProps, {addition, subtraction})(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
