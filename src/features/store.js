import { configureStore } from '@reduxjs/toolkit'
import citiesAPI from './citiesAPI'
import authSlice from './authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistUser = {
    key: 'root',
    storage,
    version: 1,
}
const persitedUSer = persistReducer(persistUser, authSlice)

const store = configureStore({
  reducer: {
    [citiesAPI.reducerPath] : citiesAPI.reducer,
    auth: persitedUSer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(citiesAPI.middleware),
})


export default store

