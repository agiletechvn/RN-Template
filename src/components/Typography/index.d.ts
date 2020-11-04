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
}

export default function Typography(props: TypographyProps): {};
