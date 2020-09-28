import React, { useState, useEffect, useContext } from "react";
import {Text,ImageBackground,Dimensions, Alert } from "react-native";
import {useNavigation} from "@react-navigation/native";
import {View,ScrollView,Button} from 'react-native'
import IconExit from 'react-native-vector-icons/MaterialCommunityIcons'
import frameHome from '../../assets/images/framehome.png';
import api from '../../services/api'
import SwitchSelector, { ISwitchSelectorOption } from "react-native-switch-selector";
import {
  Container,
  CardForPais,
  TextForDate,
  Informacoes,
  Card,
  TextCard,
  TextCardDescription,
  ButtonInforme,
  ContainerNameUserAndCountries
} from './styles'
import {useAuth} from "../../contexts/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { format } from "path";
import  formatNumber  from "../../utils/getNumberFormat";

interface ResponseData{
  country?:string;
  confirmed:number;
  recovered:number;
  critical:number;
  deaths:number;
  code?:string;
}
function Home(){
  const {navigate} = useNavigation();
  const [infoPaises,setInfoPaises] = useState<ResponseData>({} as ResponseData);
  const {signOut,user} = useAuth();
  const [switchPais,setSwitchPais] = useState<string | ISwitchSelectorOption | number>(`${user?.pais}`);
  const [loading,setLoading] = useState(false);
  
  
  useEffect(()=>{
    
    setLoading(true);
    
    api.get(switchPais === 'global' ? '/totals' : '/country' ,{
      params:{
        format:"json",name:`${user?.pais}`
      }
    }).then(response => {
      setInfoPaises(response.data[0])
      setLoading(false);
    }).catch(err => {
      Alert.alert(err.message)
      setLoading(false);
    })
    
  },[switchPais])
  
  
  function handleSignOut(){
    signOut();
  }
  
  
  return (
    <Container>
      <ImageBackground source={frameHome} resizeMode="stretch" style={{ width: '100%', height: 276 }}>
        <TouchableOpacity style={{ width: 42, marginTop: 42 }} onPress={handleSignOut}>
          <IconExit style={{ marginLeft: 12 }} name='exit-to-app' size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TextForDate>Dados de Contaminados</TextForDate>
        <ContainerNameUserAndCountries>
          <CardForPais>
            <Text style={{ marginLeft: 12 }}>{user?.name}</Text>
          </CardForPais>
          <CardForPais>
            <SwitchSelector
              options={[
                { label: `${user?.pais}`, value: `${user?.pais}` },
                { label: "Global", value: "global" }
              ]}
              initial={0}
              buttonColor="#86C0FF"
              onPress={value => setSwitchPais(value)}
              disabled={loading}
            />
          </CardForPais>
        </ContainerNameUserAndCountries>
      </ImageBackground>
      <Informacoes color="#FBFBFD">

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          <View>
            <Card name="infectados">
              <TextCard>Confirmados</TextCard>
              <TextCardDescription> {formatNumber(infoPaises.confirmed)} </TextCardDescription>
            </Card>
            <Card name="mortos">
              <TextCard>Mortos</TextCard>
              <TextCardDescription>{formatNumber(infoPaises.deaths)}</TextCardDescription>
            </Card>
            <Card name="recuperados">
              <TextCard>Recuperados</TextCard>
              <TextCardDescription>{formatNumber(infoPaises.recovered)}</TextCardDescription>
            </Card>
            <Card name="graves">
              <TextCard>Graves</TextCard>
              <TextCardDescription>{formatNumber(infoPaises.critical)}</TextCardDescription>
            </Card>
          </View>
        </ScrollView>
      </Informacoes>
    </Container>
    
    )
  }
  
  export default Home;