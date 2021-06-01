import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import CatItem from './CatItem';

const Cat = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://60b4ef87fe923b0017c83297.mockapi.io/login')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  

  return (
    <View style={styles.container}>
      <Text style={styles.home}> HOME</Text>
      {isloading ? <ActivityIndicator />
        : (<FlatList
          data={data}
          renderItem={({item}) => <CatItem element={item}/>}
          keyExtractor={item => item.id}
        />)}
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 20,
  },
  home: {
    color: 'white',
    textAlign: 'center',
  },
  element: {
    color: 'white',
  },
});

export default Cat;