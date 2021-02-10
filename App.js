import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import fetchFont from './utils/fontSetup'
import MealsNavigator from './navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'


enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFont}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err, 'error from app loading ')} />
  }

  return <MealsNavigator />
}
