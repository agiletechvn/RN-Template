import { TextInputProps } from 'react-native';

type FontFamily =
  | 'Roboto-Medium'
  | 'Roboto-Regular'
  | 'Roboto-Bold'
  | 'Roboto-Light';

interface InputProps extends TextInputProps {
  color: string;
  fontFamily: FontFamily;
  fontSize: number;
}

export default function Input(props: InputProps): {};
