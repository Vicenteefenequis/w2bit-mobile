import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";

import styles from './styles'


function Home(){
    const {navigate} = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

export default Home;