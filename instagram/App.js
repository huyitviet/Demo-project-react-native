import React from 'react';
import {View, StyleSheet} from 'react-native';
import Cat from './manhinh/Cat';

const MyApp = () => {
  return (
    <View style={styles.demo}>
      <View>
        <Cat />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  demo: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: 40,
  },
});
export default MyApp;
