import { ImageProps } from 'react-native';

interface ImageIconProps extends ImageProps {
  square: number;
  circle: number;
  name:
    | 'accountInactive'
    | 'arrowBack'
    | 'chatInactive'
    | 'circleZota'
    | 'dashboard'
    | 'document'
    | 'eyesClose'
    | 'eyesOpen'
    | 'help'
    | 'homeActive'
    | 'moreInactive'
    | 'paymentInactive'
    | 'property'
    | 'search'
    | 'tasksInactive'
    | 'tenant';
}

export default function ImageIcon(props: ImageIconProps): {};
