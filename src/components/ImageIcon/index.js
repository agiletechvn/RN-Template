import React from 'react';
import { Image } from 'react-native';
import resources from './resources';

const ImageIcon = ({ name }) => {
  if (!resources[name]) {
    // eslint-disable-next-line no-console
    console.warn('image icon not found');
    return null;
  }

  return <Image source={resources.name} />;
};

export default ImageIcon;
