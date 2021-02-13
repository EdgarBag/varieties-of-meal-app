import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import fetchFont from './utils/fontSetup'
import { enableScreens } from 'react-native-screens'

// navigation
import MealsNavigator from './navigation/MealsNavigator'

// redux
import mealsReducer from './store/reducer/meals'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'



enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFont}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err, 'error from app loading ')} />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>)
}
