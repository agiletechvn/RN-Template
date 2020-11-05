import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  loading: boolean;
  type: 'primary' | 'disabled' | 'default';
}

export default function Button(props: ButtonProps): {};
