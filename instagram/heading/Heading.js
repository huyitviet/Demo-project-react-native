import React, {Component} from 'react';
import { Text, View, TextInput, Button } from 'react-native';


export class HuyHeading extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>    
      </View>
    );
  }
}