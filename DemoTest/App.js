import React, {useState} from 'react';
import {View} from 'react-native';
import Cat from './cat/cat'
import Flat from './cat/Flat'
const Jun = () => {
  return (
  <View style={{padding:40}}>
      <Cat name="goodBye" />
    <Flat/>
  </View>
  )
};
export default Jun;
