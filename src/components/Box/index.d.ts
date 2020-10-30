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
  background: string;
  square: number;
  circle: number;
  shadowDepth: number;
  margin: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  marginHorizontal: number;
  marginVertical: number;
  padding: number;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  paddingHorizontal: number;
  paddingVertical: number;
}

export default function Box(props: BoxProps): {};
