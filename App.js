import '@src/locales';
import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import ElsewhereStore from '@src/store';
import Routes from '@src/routes';

export default function App() {
  return (
    // <Provider store={ElsewhereStore.store}>
    <SafeAreaProvider>
      {/* <PersistGate loading={null} persistor={ElsewhereStore.persistor}> */}
      <Routes />
      {/* </PersistGate> */}
    </SafeAreaProvider>
    // </Provider>
  );
}
