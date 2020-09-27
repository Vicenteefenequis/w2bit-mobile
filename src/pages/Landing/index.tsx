import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import {
    Container,
    WelcomeTitle,
    WelcomSubdescription,
    ContainerWelcome,
    StyledButton,
    TextButton,
    ContainerRegister,
    TextRegisterAccount,
    TextNotHaveAccount
} from './styles'

function Landing() {
    const navigation = useNavigation();

    function handleNavigateToRegister() {
        navigation.navigate('Register');
    }
    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }
    return (
        <Container backgroundColor="#347AF0">
            <ContainerWelcome>
                <Image source={require('../../assets/images/logo.png')} />
                <WelcomeTitle color="#FFF" >Bem Vindos ao</WelcomeTitle>
                <WelcomSubdescription color="#FFFFFF">DADOS COVID</WelcomSubdescription>
            </ContainerWelcome>
            <View >
                <StyledButton label="Enter" disabled={false} backgroundColor="#FFFFFF" onPress={handleNavigateToLogin}>
                    <TextButton color="#347AF0">Login</TextButton>
                </StyledButton>
                <ContainerRegister>
                    <TextNotHaveAccount color="#FFFFFF">
                        Não tem conta?  {"  "}
                    </TextNotHaveAccount>
                    <RectButton onPress={handleNavigateToRegister}>
                        <TextRegisterAccount color="#FFFFFF" >
                            Registre-se
                            </TextRegisterAccount>
                    </RectButton>
                </ContainerRegister>
            </View>
        </Container>
    )
}

export default Landing;