import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const Login = () => {
  
  return (
    <View style={styles.container}>
      <Text style={[styles.input], {fontSize: 30, color: 'red'}}> Login </Text>
      <TextInput style={styles.input} 
      placeholder="User name"
    />
    <TextInput style={styles.input} 
      placeholder="Password"
    />
    <Button title="Dang Nhap"/>
    </View>
  );
};
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
