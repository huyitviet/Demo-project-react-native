import React, {Component} from 'react';
import { Text, View, TextInput, Button } from 'react-native';


export class MyTextComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.message2}</Text>    
      </View>
    );
  }
}