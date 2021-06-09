import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import FriendsItem from '../friendsInfo/FriendsItem';
import FlatListItemController from './FlatListItemController';
import FlatLitstStyle from './FlatLitstStyle';

const FlatListItem = () => {
  const [data, setData] = useState([]);
  var friendController = new FlatListItemController();
  useEffect(() => {
    friendController.getFriendsFromAPI().then(listFriends => {
      setData(listFriends);
    });
  }, []);

  return (
    <FlatList 
      style={FlatLitstStyle.top}
      data={data}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <FriendsItem item={item} />}
    />
  );
};
export default FlatListItem;
