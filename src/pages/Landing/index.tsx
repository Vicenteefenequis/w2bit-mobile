import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { RectButton } from "react-native-gesture-handler";


import styles from './styles';


function Landing(){

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image  source={require('../../assets/images/logo.png')}/>
                <Text style={styles.title}>Bem Vindos ao</Text>
                <Text style={styles.descriptionTitle}>DADOS COVID</Text>
            </View>
            <View>
                <Text>Ola</Text>
            </View>
           
        </View>
    )
}

export default Landing;