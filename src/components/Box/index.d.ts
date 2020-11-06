import { ViewProps } from 'react-native';

interface BoxProps extends ViewProps {
  background: string;
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignSelf: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  flex: number;
  square: number;
  circle: number;
  shadowDepth: number;
  width: string | number;
  height: string | number;
  margin: number | [number, number] | [number, number, number, number];
  padding: number | [number, number] | [number, number, number, number];
}

export default function Box(props: BoxProps): {};
