import React, { useState, useEffect, useContext } from "react";
import {Text,ImageBackground,Dimensions } from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,ScrollView,Button} from 'react-native'
import IconExit from 'react-native-vector-icons/MaterialCommunityIcons'
import frameHome from '../../assets/images/framehome.png';
import Constants from 'expo-constants';


import {
    Container,
    CardForPais,
    TextForDate,
    Chart,
    Informacoes,
    Card,
    TextCard,
    TextCardDescription,
    ButtonInforme,
    ContainerNameUserAndCountries
} from './styles'
import {
    LineChart,
  } from "react-native-chart-kit";
import {useAuth} from "../../contexts/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home(){
    const {navigate} = useNavigation();

    const {signOut,user} = useAuth();

    function handleSignOut(){
        signOut();
    }

    return (
        <Container>
                <ImageBackground source={frameHome} resizeMode="stretch" style={{width:'100%',height:230,justifyContent:'center'}}>
                            <TouchableOpacity style={{width:42}} onPress={handleSignOut}>
                                <IconExit style={{marginLeft:12}} name='exit-to-app' size={24} color="#FFFFFF"/>
                            </TouchableOpacity>
                   <View style={{flexDirection:'column',justifyContent:'center',marginLeft:12}}>
                        <TextForDate>Dados de contaminados</TextForDate>
                   </View>
                    
                    <ContainerNameUserAndCountries>
                        <CardForPais>
                            <Text style={{marginLeft:12}}>Country Brazil</Text>
                        </CardForPais>
                        <Text style={{margin:16,color:"#ffffff",fontSize:16}}>{user?.name}</Text>
                    </ContainerNameUserAndCountries>
                </ImageBackground>
                <Chart>
                    <Text>Grafico de Confirmados</Text>
                    <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={230}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#3D278A",
                        backgroundGradientFrom: "#ffffff",
                        backgroundGradientTo: "#FFFFFF",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (_) => `#007AFE`,
                        labelColor: (_) => `#007AFE`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffffff"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
               </Chart>
               <Informacoes color="#FBFBFD">
                  <Text style={{padding:24,fontWeight:'bold',fontSize:24}}>Suas Informações</Text>
                  <ScrollView  
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 20 }}
                  >
                  <Card color="#EAF4FE">
                    <View>
                        <TextCard>Julho</TextCard>
                        <TextCardDescription color="#8C92A4">Informe Completo</TextCardDescription>
                    </View>
                    <View>
                        <ButtonInforme color="#CAE6FC">
                        <Icon  
                        name='list'
                        size={24}
                        color='#37C6F7'
                        />
                        </ButtonInforme>
                    </View>
                  </Card>
                  <Card color="#EAF4FE">
                    <View>
                        <TextCard>Junho</TextCard>
                        <TextCardDescription color="#8C92A4">Informe Completo</TextCardDescription>
                    </View>
                    <View>
                        <ButtonInforme color="#CAE6FC">
                        <Icon  
                        name='list'
                        size={24}
                        color='#37C6F7'
                        />
                        </ButtonInforme>
                    </View>
                  </Card>
                  <Card color="#EAF4FE">
                    <View>
                        <TextCard>Agosto</TextCard>
                        <TextCardDescription color="#8C92A4">Informe Completo</TextCardDescription>
                    </View>
                    <View>
                        <ButtonInforme color="#CAE6FC">
                        <Icon  
                        name='list'
                        size={24}
                        color='#37C6F7'
                        />
                        </ButtonInforme>
                    </View>
                  </Card>

                  </ScrollView>
                  
                  
               </Informacoes>
        </Container>

    )
}

export default Home;