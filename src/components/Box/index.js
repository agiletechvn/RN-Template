import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  SHADOW_HEIGHT_MAP,
  SHADOW_OPACITY_MAP,
  SHADOW_RADIUS_MAP,
} from './constants';
import { normalizeOptions } from '@src/utils/formatters';

const Box = ({ style, children, ...rest }) => {
  const combinedStyle = [
    'flexDirection',
    'justify',
    'align',
    'alignSelf',
    'flex',
    'background',
    'square',
    'circle',
    'shadowDepth',
    'margin',
    'padding',
  ]
    .map((e) => {
      const value = rest[e];
      if (e === 'margin' || e === 'padding') {
        const [top, bottom, left, right] = normalizeOptions(value);
        if (e === 'margin') {
          return StyleSheet.create({
            marginTop: top,
            marginBottom: bottom,
            marginLeft: left,
            marginRight: right,
          });
        }
        return StyleSheet.create({
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        });
      } else if (value) {
        return styles[e](value);
      }
    })
    .filter((e) => e);

  return (
    <View style={[combinedStyle, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  background: (color) => {
    return { backgroundColor: color };
  },
  width: (width) => {
    return { width };
  },
  height: (height) => {
    return { height };
  },
  flex: (number) => {
    return { flex: number };
  },
  flexDirection: (direction) => {
    return {
      flexDirection: direction,
    };
  },
  justify: (alignment) => {
    return {
      justifyContent: alignment,
    };
  },
  align: (alignment) => {
    return {
      alignItems: alignment,
    };
  },
  alignSelf: (alignment) => {
    return {
      alignSelf: alignment,
    };
  },
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
  shadowDepth: (depth) => {
    let realDepth = 0;
    if (depth > 24) {
      realDepth = 24;
    } else if (depth < 0) {
      realDepth = 0;
    } else {
      realDepth = depth;
    }

    return {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: SHADOW_HEIGHT_MAP[realDepth],
      },
      shadowOpacity: SHADOW_OPACITY_MAP[realDepth],
      shadowRadius: SHADOW_RADIUS_MAP[realDepth],
      elevation: realDepth,
    };
  },
});

export default Box;
