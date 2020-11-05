import { TextProps } from 'react-native';

type FontFamily =
  | 'Roboto-Medium'
  | 'Roboto-Regular'
  | 'Roboto-Bold'
  | 'Roboto-Light';

interface TypographyProps extends TextProps {
  color: string;
  fontFamily: FontFamily;
  fontSize: number;
  margin: number | [number, number] | [number, number, number, number];
  padding: number | [number, number] | [number, number, number, number];
}

export default function Typography(props: TypographyProps): {};
