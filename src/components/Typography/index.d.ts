import { TextProps } from 'react-native';

type FontFamily = 'Sneak-Regular' | 'Sneak-Bold' | 'Sneak-Light';

interface TypographyProps extends TextProps {
  color: string;
  fontFamily: FontFamily;
  fontSize: number;
  margin: number | [number, number] | [number, number, number, number];
  padding: number | [number, number] | [number, number, number, number];
}

export default function Typography(props: TypographyProps): {};
