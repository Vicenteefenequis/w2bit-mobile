import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


import Landing from '../pages/Landing'
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthStack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer independent={true}>
            <AuthStack.Navigator screenOptions={{headerShown:false}}>
              <AuthStack.Screen name="Landing" component={Landing}/>
              <AuthStack.Screen name="Login" component={Login}/>
              <AuthStack.Screen name="Register" component={Register}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;