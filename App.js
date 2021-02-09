import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import fetchFont from './utils/fontSetup'
import MealsNavigator from './navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'
// import MealDetailsScreen from './screens/MealDetailScreen';


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

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'bl',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
