import React, { useEffect } from 'react';
import Main from './src/main';
import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useAppState, useOnlineManager } from 'hooks';
import SplashScreen from 'react-native-splash-screen';

function onAppStateChange(status) {
  focusManager.setFocused(status === 'active');
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
