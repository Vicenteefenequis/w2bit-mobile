import React from "react";
import { View, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";


import styles from './styles'

function Register(){
    const {navigate} = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Register</Text>
        </View>
    )
}

export default Register;