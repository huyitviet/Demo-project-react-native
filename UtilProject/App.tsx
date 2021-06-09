import * as React from 'react';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

enableScreens();
//Man hinh
import Home from './src/features/home/Home';
import AddFriends from './src/features/addFriends/AddFriends';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddFriends" component={AddFriends} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
