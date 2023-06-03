import React from 'react'
import SignUp from '../components/SignUp'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../redux/reducers';

const store = configureStore({
  reducer: reducers
});

const signup = () => {
  return (
    <Provider store={store}>
      <div>
        <SignUp />
      </div>
    </Provider>
  )
}

export default signup
