import styled from 'styled-components/native';


interface Props{
    color?:string;
}

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content: space-between;
    background-color:white;
`;

export const ContainerInputs = styled.View`
    width:80%;
`;
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