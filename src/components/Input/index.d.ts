import { TextInputProps } from 'react-native';

type FontFamily = 'Sneak-Regular' | 'Sneak-Bold' | 'Sneak-Light';

interface InputProps extends TextInputProps {
  color: string;
  fontFamily: FontFamily;
  fontSize: number;
}

export default function Input(props: InputProps): {};
