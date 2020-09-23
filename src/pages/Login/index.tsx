import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";


import {Container} from './styles'




function Login(){
    const {navigate} = useNavigation();
    return (
        <Container>
            <Text>LOGIN</Text>
        </Container>
    )
}

export default Login;