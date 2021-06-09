import React from 'react';
import {View, Image, Text, Button} from 'react-native';
import stylesFriends from './stylesFriendsItem';

const FriendsItem = props => {
  const {item} = props;
  return (
    <View style={stylesFriends.item}>
      <Text style={stylesFriends.title}> {item.name}</Text>
      <Image
        style={stylesFriends.image}
        source={{
          uri: item.avatar,
        }}
      />
      <Button title="Add Friend" />
    </View>
  );
};
export default FriendsItem;