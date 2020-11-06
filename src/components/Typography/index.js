import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { normalizeOptions } from '@src/utils/formatters';

const Typography = ({ style, children, margin, padding, ...rest }) => {
  const combinedStyle = ['color', 'fontSize', 'fontFamily']
    .map((e) => {
      if (!rest[e]) {
        return;
      }
      return styles[e](rest[e]);
    })
    .filter((e) => e);

  return (
    <Text
      style={[
        combinedStyle,
        margin && styles.margin(normalizeOptions(margin)),
        padding && styles.padding(normalizeOptions(padding)),
        style,
      ]}
      {...rest}
    >
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
  margin: ([top, left, bottom, right]) => {
    return {
      marginTop: top,
      marginBottom: bottom,
      marginLeft: left,
      marginRight: right,
    };
  },
  padding: ([top, left, bottom, right]) => {
    return {
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    };
  },
});
