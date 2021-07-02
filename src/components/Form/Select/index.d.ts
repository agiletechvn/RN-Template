import { ViewProps } from 'react-native';

interface SelectProps {
  required?: boolean;
  multiple?: boolean;
  selectContainerStyle?: ViewProps
}

export default function Select(props: SelectProps): {};