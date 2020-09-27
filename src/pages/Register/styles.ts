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
export const PickerContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.inputs};

`;



export const TextButton = styled.Text`
    color:white;
    font-family: ${({ theme }) => theme.fonts.medium};
`;