import React from 'react';
import Counter from './src/Counter';
import Counter2 from './src/screens/Counter2';
import {Provider} from 'react-redux';
import store from './src/store/store';
import 'react-native-gesture-handler'; // có cần install k
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {enableScreens} from 'react-native-screens';
// lsau save trc khi lưu nhá. đụ má toàn chạy r chưa save

enableScreens();

const Stack = createStackNavigator();

const App = props => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Counter2" component={Counter2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
