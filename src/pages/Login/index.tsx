import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";


import styles from './styles'
//import { useNavigation } from "@react-navigation/native";




function Login(){
    const {navigate} = useNavigation();
    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
        </View>
    )
}

export default Login;