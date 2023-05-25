import Core from './Core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store';
import React from 'react';


console.log(store.getState())


const App = () => {
  const persistor = persistStore(store)
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Core/>
        </PersistGate>
      </Provider>
    </>
  );
}


export default App;
