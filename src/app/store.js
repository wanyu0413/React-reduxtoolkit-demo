import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()

// we don't need combineReducers to combine 2 reducers, because configureStore will handle it under the hood
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // we append the logger middleware to the list of default middleware
})

export default store