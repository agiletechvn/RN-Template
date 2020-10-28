import React from 'react';
// import AppContainer from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ElsewhereStore from '@src/store';
import '@src/locales';

export default function App() {
  return (
    <Provider store={ElsewhereStore.store}>
      <SafeAreaProvider>
        <PersistGate loading={null} persistor={ElsewhereStore.persistor}>
          {/* <AppContainer /> */}
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
}
