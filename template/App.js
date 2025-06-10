import React, { useEffect } from 'react';
import Main from './src/main';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from 'state/store';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
