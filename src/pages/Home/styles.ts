import styled,{css} from 'styled-components/native';


interface Props{
    name?:string;
    color?:string;
}


export const Container = styled.View`
    flex:1;
    background-color:white;
`;
export const CardForPais = styled.View`
    background-color:white;
    width:146px;
    height:30px;
    border-radius:100px;
    justify-content:center;
`;
export const TextForDate = styled.Text`
    color:white;
    font-size:24px;
    font-family:"TitilliumWeb_600SemiBold";
    line-height:70px;
    margin-left:24px;
`;

export const ContainerNameUserAndCountries = styled.View`
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin-top:42px;
    
`;

export const Informacoes = styled.View<Props>`
    background-color:white;
    align-items:center;
    flex:1;
    

`;

export const Card = styled.View<Props>`
    
    width:279px;
    height:86px;
    border-radius:15px;
    justify-content:space-between;
    padding:24px;
    
    flex-direction:row;
    margin-top:24px;

    ${props =>
    props.name === 'infectados' &&
    css`
      background-color: ${props.theme.colors.error};
    `}

    
    ${props =>
    props.name === 'mortos' &&
    css`
      background-color: ${props.theme.colors.mortos};
    `}

    
    ${props =>
    props.name === 'recuperados' &&
    css`
      background-color: ${props.theme.colors.recuperados};
    `}
    
    ${props =>
    props.name === 'ativos' &&
    css`
      background-color: ${props.theme.colors.ativos};
    `}
    
    ${props =>
    props.name === 'graves' &&
    css`
      background-color: ${props.theme.colors.graves};
    `}
`;

export const TextCard = styled.Text<Props>`
    font-family:"TitilliumWeb_600SemiBold";
    font-size:18px;
    color: ${({ theme }) => theme.colors.white};
`;

export const TextCardDescription = styled.Text<Props>`
    font-family:"TitilliumWeb_600SemiBold";
    font-size:12px;
    line-height:19px;
    color: ${({ theme }) => theme.colors.white};
`;


export const ButtonInforme = styled.TouchableOpacity<Props>`
    width:50px;
    height:50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius:79px;
    justify-content:center;
    align-items:center;
`;