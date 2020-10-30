import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  SHADOW_HEIGHT_MAP,
  SHADOW_OPACITY_MAP,
  SHADOW_RADIUS_MAP,
} from './constants';

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
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginHorizontal',
    'marginVertical',
    'padding',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingHorizontal',
    'paddingVertical',
  ]
    .map((e) => {
      if (rest[e]) {
        return styles[e](rest[e]);
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
  margin: (number) => {
    return { margin: number };
  },
  marginTop: (number) => {
    return { marginTop: number };
  },
  marginBottom: (number) => {
    return { marginBottom: number };
  },
  marginLeft: (number) => {
    return { marginLeft: number };
  },
  marginRight: (number) => {
    return { marginRight: number };
  },
  marginVertical: (number) => {
    return { marginVertical: number };
  },
  marginHorizontal: (number) => {
    return { marginHorizontal: number };
  },

  padding: (number) => {
    return { padding: number };
  },
  paddingTop: (number) => {
    return { paddingTop: number };
  },
  paddingBottom: (number) => {
    return { paddingBottom: number };
  },
  paddingLeft: (number) => {
    return { paddingLeft: number };
  },
  paddingRight: (number) => {
    return { paddingRight: number };
  },
  paddingVertical: (number) => {
    return { paddingVertical: number };
  },
  paddingHorizontal: (number) => {
    return { paddingHorizontal: number };
  },
});

export default Box;
