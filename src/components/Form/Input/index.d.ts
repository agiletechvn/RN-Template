import { TextInputProps, StyleSheetProperties } from 'react-native';

interface InputProps extends TextInputProps {
  containerStyle?: StyleSheetProperties;
  inputStyle?: StyleSheetProperties;
  required?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  suffix?: React.Component;
  prefix?: React.Component;
  type?: 'password';
}

export default function Input(props: InputProps): {};