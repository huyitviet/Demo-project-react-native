import React from 'react';
// import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
// import CounterVesion2 from './src/CouterVesion2';
import CounterV3 from './src/CounterV3';
const App = () => {

  return <Provider store={store}>
    {/* <CounterVesion2 /> */}
    <CounterV3 />
  </Provider>
};
export default App;