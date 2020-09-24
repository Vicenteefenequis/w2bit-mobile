import styled from 'styled-components/native';


interface Props{
    color?:string;
}


export const Container = styled.View`
    flex:1;
    background-color:white;
`;
export const ContainerForPais = styled.View`
    background-color:white;
    width:146px;
    height:30px;
    border-radius:100px;
    margin-top:32px;
    justify-content:center;
    margin-left:24px;
`;
export const TextForDate = styled.Text`
    color:white;
    font-size:24px;
    margin-left:24px;
    font-family:"TitilliumWeb_600SemiBold";
    line-height:33px;
`;
export const Chart = styled.View`
    justify-content:center;
    align-items:center;
    margin-top:42px;
`;


export const Informacoes = styled.View<Props>`
    background-color: ${props => props.color};
    align-items:center;
    flex:1;
    

`;

export const Card = styled.View<Props>`
    
    width:340px;
    border-radius:79px;
    justify-content:space-between;
    padding:24px;
    
    background-color: ${props => props.color};
    flex-direction:row;
    margin-top:24px;
`;

export const TextCard = styled.Text<Props>`
    font-family:"TitilliumWeb_600SemiBold";
    font-size:18px;
`;

export const TextCardDescription = styled.Text<Props>`
    font-family:"TitilliumWeb_600SemiBold";
    font-size:12px;
    line-height:19px;
    color: ${props => props.color};
`;


export const ButtonInforme = styled.TouchableOpacity<Props>`
    width:50px;
    height:50px;
    background-color: ${props => props.color};
    border-radius:79px;
    justify-content:center;
    align-items:center;
`;