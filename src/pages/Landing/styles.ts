import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between",
        backgroundColor: "#347AF0",
    },
    containerTitle:{
        justifyContent:"center",
        alignItems:'center',
        marginTop:64,
    },
  
    title:{
        fontFamily:"TitilliumWeb_400Regular",
        color:"#FFFFFF",
        fontSize:28,
        opacity:0.4,
        marginTop:24,
    },
    descriptionTitle:{
        fontFamily:"TitilliumWeb_300Light",
        fontSize:48,
        color:"#FFFFFF"
    },
    button:{
        width:200,
        height:46,
        borderRadius: 23,
        padding: 24,
        justifyContent: "center",
        alignItems:'center',
    },
    buttonSecondary: {
        backgroundColor: "#FFFFFF",
    },
    containerLogin:{
        height:240,
        alignItems:'center',
    },
    textLogin:{
        fontFamily:"TitilliumWeb_600SemiBold",
        fontSize:19,
        color:"#347AF0"
    },
    containerRegister:{
        flexDirection:'row',
        marginTop:20,
    },
    textButtonRegister:{
        fontFamily:"TitilliumWeb_600SemiBold",
        color:"#FFFFFF",
    },
    textRegister:{
        color:"#FFFFFF",
        opacity:0.5,
    }

});

export default styles;