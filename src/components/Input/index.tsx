import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    ForwardRefRenderFunction
  } from 'react';
  import { TextInputProps, ViewStyle, StyleProp,Text } from 'react-native';
  
  import { useField } from '@unform/core';
  
  import { Container, Icon,TextInput } from './styles';
import { red100 } from 'react-native-paper/lib/typescript/src/styles/colors';
  
  interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    containerStyle?: StyleProp<ViewStyle>;
  }
  
  interface InputValueReference {
    value: string;
  }
  
  interface InputRef {
    focus(): void;
  }
  
  const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon, containerStyle = {}, ...rest },
    ref,
  ) => {
    const inputElementRef = useRef<any>(null);
  
    const { registerField, defaultValue = '', fieldName, error,clearError } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);
  
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
  
      setIsFilled(!!inputValueRef.current.value);
    }, []);
  
    useImperativeHandle(ref, () => ({
      focus() {
        inputElementRef.current.focus();
      },
    }));
  
    useEffect(() => {
      registerField<string>({
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value) {
          inputValueRef.current.value = value;
          inputElementRef.current.setNativeProps({ text: value });
        },
        clearValue() {
          inputValueRef.current.value = '';
          inputElementRef.current.clear();
        },
      });
    }, [fieldName, registerField]);
  
    return (
      <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
        <Icon isFilled={isFilled} isFocused={isFocused} name={icon} size={20} />
        <TextInput
            ref={inputElementRef}
            keyboardAppearance="dark"
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={value => {
                inputValueRef.current.value = value;
            }}
            {...rest}
       />
       {error && (
         isFocused ? (!error)  :  <Text style={{color:"red"}}>{error}</Text> 
       )}
      </Container>
    );
  };
  
  export default forwardRef(Input);