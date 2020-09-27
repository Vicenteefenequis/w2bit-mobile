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
export const TextPaginaLogin = styled.Text`
    font-family:${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.grayHard};
    font-size:24px;
`;



export const ContainerInputs = styled.View`
     width:80%;
`;

export const ContainerInfo = styled.View`
    flex-direction:row;
    align-items:center;
`

export const TextRegisterAccount = styled.Text<Props>`
    color: ${({ theme }) => theme.colors.blue};
    font-family:${({ theme }) => theme.fonts.medium};
    font-size:18px;
`
export const TextNotHaveAccount = styled.Text<Props>`
    color: ${({ theme }) => theme.colors.grayHard};
    font-size:15px;
    opacity:0.7;
`


export const Button = styled.TouchableOpacity<Props>`
    margin-bottom:42px;
    width:80%;
    padding:12px;
    align-items:center;
    border-radius:100px;
`;

export const TextButton = styled.Text`
    color:white;
    font-family:${({ theme }) => theme.fonts.medium};
`;