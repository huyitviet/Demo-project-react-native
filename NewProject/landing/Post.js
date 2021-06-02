import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Button, Alert } from 'react-native';

const Post = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('')

  const themBan = () => {
    return (
      fetch('https://225321267044.ngrok.io/friends', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: { name },
          age: { age },
          address: { address }
        })
      })
    )
  }


  const CapNhat = () => {
    console.log("da cap nhat")
  return (
      fetch('https://225321267044.ngrok.io/friends/' + id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: { name },
          age: { age },
          address: { address }
        })
      })
    )
  }

  const XoaDuLieu = () => {
    console.log("Xoa du lieu ID")
    return (
      fetch('https://225321267044.ngrok.io/friends/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      }).finally(() => Alert.alert("Da xoa thanh cong"))
      
    )
  }




  return (
    <View style={{ padding: 60 }}>
      <TextInput style={styles.container}
        placeholder="Ho ten"
        onChangeText={name => setName(name)}
      />

      <TextInput style={styles.container}
        placeholder=" tuoi cua ban"
        onChangeText={age => setAge(age)} />

      <TextInput style={styles.container}
        placeholder="Dia chi cua ban"
        onChangeText={address => setAddress(address)} />

      <TextInput style={styles.container}
        placeholder="Ban muon sua cho ID nao?"
        onChangeText={id => setId(id)}
      />

      <Button
        title=" Them ban"

        onPress={themBan} />

      <Button
        title="Cap nhat"
        onPress={CapNhat} />

      <Button 
      title="Xoa"
      onPress={XoaDuLieu}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 200,
    backgroundColor: 'gray',
    borderWidth: 1

  },
});
export default Post;
