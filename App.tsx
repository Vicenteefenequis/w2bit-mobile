import React from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import {StatusBar} from 'react-native'
import {TitilliumWeb_300Light,TitilliumWeb_400Regular,TitilliumWeb_600SemiBold} from '@expo-google-fonts/titillium-web'
import {AuthProvider} from './src/contexts/auth'
import {ThemeProvider} from 'styled-components'
import defaultTheme from './src/styles/default'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes';


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
  <ThemeProvider theme={defaultTheme}>
    <NavigationContainer>
      <AuthProvider>
          <Routes/>
          <StatusBar translucent backgroundColor="transparent" barStyle="default"/>
      </AuthProvider>
    </NavigationContainer>
  </ThemeProvider>
   
     
  );
}

