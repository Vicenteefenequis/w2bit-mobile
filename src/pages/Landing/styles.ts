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
    }
});

export default styles;