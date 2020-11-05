import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { normalizeOptions } from '@src/utils/formatters';

const Typography = ({ style, children, ...rest }) => {
  const combinedStyle = ['color', 'fontSize', 'fontFamily', 'margin', 'padding']
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
