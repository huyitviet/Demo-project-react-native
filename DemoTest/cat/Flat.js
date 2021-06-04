import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
const Flat = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('')
      .then((Response) => Response.json)
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, []);

  renderItem= () => {
    {item} => 
  }

  return (
    <View>
      {isloading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({item}) => id }/>
          renderItem = {renderItem}
      )}




    </View>


    />
  )


};
export default Flat;
