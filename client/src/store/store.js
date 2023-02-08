import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import savedReducer from './saveReducer'
import userReducer from './userReducer'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const UserpersistedReducer = persistReducer(persistConfig, userReducer)
const SavedpersistedReducer = persistReducer(persistConfig, savedReducer);

export const store = configureStore({
  reducer: {
    user: UserpersistedReducer,
    saved: SavedpersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);