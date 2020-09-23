import styled from 'styled-components/native';

interface Props{
    color?:string;
}

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:space-around;
`;

export const ImageContainer = styled.View`
    margin-top:64px;
    width:100%;
    align-items:center;
`;

export const ContainerInputs = styled.View`
     width:80%;
`;

export const ContainerInfo = styled.View`
    flex-direction:row;
    align-items:center;
`

export const TextRegisterAccount = styled.Text<Props>`
    color: ${props => props.color};
    font-family:"TitilliumWeb_600SemiBold";
    font-size:18px;
`
export const TextNotHaveAccount = styled.Text<Props>`
    color: ${props => props.color};
    font-size:15px;
    opacity:0.7;
`


export const Button = styled.TouchableOpacity<Props>`
    background-color:${props => props.color};
    margin-bottom:42px;
    width:80%;
    padding:12px;
    align-items:center;
    border-radius:100px;
`;

export const TextButton = styled.Text`
    color:white;
    font-family:"TitilliumWeb_600SemiBold";
`;