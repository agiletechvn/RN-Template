import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistConfig = {
  key: '@Elsewhere',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const createPersistedSagaStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

const ElsewhereStore = createPersistedSagaStore();

export default ElsewhereStore;
