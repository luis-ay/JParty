import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import gameReducer from './features/gameSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation']
}

const persistedReducer = persistReducer(persistConfig, gameReducer)
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {game: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: ['persist/PERSIST']
    }
  })
})

export default store