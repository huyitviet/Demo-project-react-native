import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import Post from './landing/Post';
// import Information from './infomation'
const MyApp = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://851c4f734b99.ngrok.io/friends')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error))
  //     .finally(() => setIsLoading(false));
  // }, []);
  

  // const renderItem = ({item}) => <Text> {item.name} </Text>;
  return (
    <View>
      {/* {isloading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
        />
       
      )} */}
      <Post />
    </View>
  );
};
export default MyApp;
