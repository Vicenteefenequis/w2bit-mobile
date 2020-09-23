import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo'
import {Text} from 'react-native'
import * as Font from 'expo-font';
import {TitilliumWeb_300Light,TitilliumWeb_400Regular,TitilliumWeb_600SemiBold} from '@expo-google-fonts/titillium-web'


import Routes from './src/routes'


export default function App() {
  const [fontsLoaded] = Font.useFonts({
    TitilliumWeb_300Light,
    TitilliumWeb_400Regular,
    TitilliumWeb_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
      <>
          <StatusBar style="light" translucent/>
          <Routes/>
      </>
  );
}

