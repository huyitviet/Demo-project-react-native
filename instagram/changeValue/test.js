




// import React, { useState, useEffect } from 'react';
// import { Text, View } from 'react-native';

// const Blink = (props) => {
//   const [isShowingText, setIsShowingText] = useState(true);

//    useEffect(() => {
//      const toggle = setInterval(() => {
//        setIsShowingText(!isShowingText);
//      }, 1000);

//      return () => clearInterval(toggle);
//   })

//   if (!isShowingText) {
//     return null;
//   }

//   return <Text>{props.text}</Text>;
// }

// const BlinkApp = () => {
//   return (
//     <View style={{marginTop: 50}}>
//       <Blink text='I love to blink' />
//       <Blink text='Yes blinking is so great' />
//       <Blink text='Why did they ever take this out of HTML' />
//       <Blink text='Look at me look at me look at me' />
//     </View>
//   );
// }

// export default BlinkApp;





// import React, { Component } from 'react';
// import { MyTextComponent } from './heading/MyTextComponent'
// import { Text, View, TextInput, Button, Alert} from 'react-native';
// import { changeValue } from './changeValue/ChangeValue';



// export default class WelcomeScreen extends React.Component {
//   login() {
//     console.log("Hahh")
//   }
//   render() {
//     return (
//       <View>
//         <changeValue /> 

//         <MyTextComponent message2={'Chào mừng độc giả tới VNTALKING '}/>
//         <TextInput style={{ marginTop: 250, justifyContent: "center", backgroundColor: '#F3F3F3', width: 500, height: 50 }} keyboardType="phone-pad" placeholder="So dien thoai" />
//         <TextInput style={{ marginTop: 10, justifyContent: "center", backgroundColor: '#F3F3F3', width: 500, height: 50 }} keyboardType="default" placeholder="Mat khau" secureTextEntry={true} />
//         <Button title="Quen mat khau" />
//         <Button
//           onPress = {this.login()}
//           title="Login" style={{ backgroundColor: '#F9F9F9', width: 300, height: 50 }} color="#f194ff" />
//       </View>
//     )
//   }
// }













// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// }