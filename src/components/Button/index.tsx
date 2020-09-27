import React from 'react';
import {ActivityIndicator} from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, enabled, ...rest }) => {
  return (
    <Container {...rest}>
      {enabled && !enabled ? <ActivityIndicator size={16} color="#FFFFFF" /> : (
      <ButtonText>{children}</ButtonText>)}
    </Container>
  );
};

export default Button;