
import styled from 'styled-components/native';

interface ButtonInterface{
    active?: boolean;
    label: string;
    disabled: boolean;
    backgroundColor:string;
 }

interface Props{
    backgroundColor?:string;
    color?:string;
}

export const Container = styled.View<Props>`
    flex: 1;
    justify-content:space-around;
    align-items:center;
`;

export const WelcomeTitle = styled.Text<Props>`
    font-family:"TitilliumWeb_400Regular";
    font-size:28px;
    opacity:0.4;
    margin-top:24px;
    color: ${props => props.color};       
        
`;


export const WelcomSubdescription = styled.Text<Props>`
    font-family:"TitilliumWeb_300Light";
    font-size:48px;
    color:${props => props.color};
`;

export const ContainerWelcome = styled.View<Props>`
    justify-content:center;
    align-items:center;
`;

export const StyledButton = styled.TouchableOpacity<ButtonInterface>`
    width:200;
    height:46;
    border-radius: 23px;
    padding: 24px;
    justify-content: center;
    align-items:center;

    background-color: ${props => props.backgroundColor};
    margin-bottom:24px;;
`;

export const TextButton = styled.Text<Props>`
    color: ${props => props.color};
    font-family:"TitilliumWeb_600SemiBold";
    font-size:16px;
`

export const ContainerRegister = styled.View`
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