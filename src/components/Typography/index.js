import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Typography = ({ style, children, ...rest }) => {
  const combinedStyle = ['color', 'fontSize', 'fontFamily']
    .map((e) => {
      if (rest[e]) {
        return styles[e](rest[e]);
      }
    })
    .filter((e) => e);

  return (
    <Text style={[combinedStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  color: (color) => {
    return { color };
  },
  fontSize: (size) => {
    return { fontSize: size };
  },
  fontFamily: (fontFamily) => {
    return { fontFamily };
  },
});

// const fontSize = [8, 10, 12, 14, 16];
// const fontFamily = [bold, regular];
