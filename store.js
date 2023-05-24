import { configureStore } from '@reduxjs/toolkit'

import gameReducer from './features/gameSlice'


// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    game: gameReducer,
  }
})

export default store