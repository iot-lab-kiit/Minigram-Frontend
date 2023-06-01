import React from 'react'
import SignIn from '../components/SignIn'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../redux/reducers';

const store = configureStore({
  reducer: reducers
});


const signin = () => {
  return (
    <Provider store={store}>
      <div>
        <SignIn />
      </div>
    </Provider>
  )
}

export default signin;