import React from 'react';
import {View, Button} from 'react-native';
import styles from './StylesHome';
import Search from '../../common/component/Search/Search';
import FlatListItem from '../../common/component/FriendsItem/listFriends/FlatListItem'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Search />
      <Button
        title="Go to Add Friends"
        onPress={() => navigation.navigate('AddFriends')}
      />
       <FlatListItem />
    </View>
  );
};

export default Home;
