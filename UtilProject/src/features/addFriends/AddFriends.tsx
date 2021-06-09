import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Search from '../../common/component/Search/Search';
import stylesAddFriend from './AddFriendsStyle';
import FlatListItem from '../../common/component/FriendsItem/listFriends/FlatListItem';
import styles from '../home/StylesHome';


const AddFriends = () => {

  return (
    <View style={stylesAddFriend.topAddFriend}>
      <Search />
      <View style={styles.itemFlatlist}>
        <FlatListItem />
      </View>
    </View>
  );
};
export default AddFriends;
