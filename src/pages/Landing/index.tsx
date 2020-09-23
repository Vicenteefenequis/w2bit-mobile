import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";


import styles from './styles';


function Landing(){
    const navigation = useNavigation();

    function handleNavigateToRegister(){
        navigation.navigate('Register');
    }
    function handleNavigateToLogin(){
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image  source={require('../../assets/images/logo.png')}/>
                <Text style={styles.title}>Bem Vindos ao</Text>
                <Text style={styles.descriptionTitle}>DADOS COVID</Text>
            </View>
            <View style={styles.containerLogin}>
                <RectButton onPress={handleNavigateToLogin}  style={[styles.button, styles.buttonSecondary]}>
                    <Text style={styles.textLogin}>Login</Text>
                </RectButton>
                <View style={styles.containerRegister}>
                    <Text style={styles.textRegister}>
                        Não tem conta?  {"  "}
                    </Text>   
                    <RectButton onPress={handleNavigateToRegister}>
                            <Text style={styles.textButtonRegister}> 
                                Registre-se
                            </Text>
                    </RectButton>              
                </View>
            </View>
           
        </View>
    )
}

export default Landing;