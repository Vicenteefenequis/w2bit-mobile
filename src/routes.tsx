import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


import Landing from './pages/Landing'
import Login from "./pages/Login";

const AppStack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
              <AppStack.Screen name="Landing" component={Landing}/>
              <AppStack.Screen name="Login" component={Login}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
