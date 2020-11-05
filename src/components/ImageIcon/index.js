import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import resources from './resources';

const ImageIcon = ({ name, style, ...rest }) => {
  const combinedStyle = ['square', 'circle']
    .map((e) => {
      if (rest[e]) {
        return styles[e](rest[e]);
      }
    })
    .filter((e) => e);
  return (
    <FastImage
      // eslint-disable-next-line dot-notation
      source={resources[name]}
      resizeMode="contain"
      style={[styles.defaultStyle, combinedStyle, style]}
      {...rest}
    />
  );
};

export default ImageIcon;

const styles = StyleSheet.create({
  defaultStyle: { height: 24, width: 24 },
  square: (number) => {
    return {
      height: number,
      width: number,
    };
  },
  circle: (number) => {
    return {
      height: number,
      width: number,
      borderRadius: number / 2,
    };
  },
});
