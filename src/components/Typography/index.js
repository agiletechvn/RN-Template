import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { normalizeOptions } from '@src/utils/formatters';
import colors from '@src/utils/colors';

const Typography = ({ style, children, margin, padding, type, ...rest }) => {
  const combinedStyle = ['color', 'fontSize', 'fontFamily', 'fontWeight']
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
        margin && styles.margin(normalizeOptions(margin)),
        padding && styles.padding(normalizeOptions(padding)),
        type && styles.type(type),
        combinedStyle,
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
  type: (type) => {
    if (type === 'h1') {
      return {
        color: colors.black100,
        fontFamily: 'Sneak-Regular',
        fontWeight: '300',
        fontSize: 44,
        lineHeight: 44,
        letterSpacing: -2,
        fontStyle: 'normal',
      };
    }
    if (type === 'h2') {
      return {
        color: colors.black100,
        fontFamily: 'Sneak-Regular',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: -0.5,
        fontStyle: 'normal',
      };
    }
    if (type === 'h3') {
      return {
        color: colors.black100,
        fontFamily: 'Sneak-Regular',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19.2,
        fontStyle: 'normal',
      };
    }
    if (type === 'h4') {
      return {
        color: colors.black100,
        fontFamily: 'Sneak-Regular',
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 16,
        fontStyle: 'normal',
      };
    }
    if (type === 'paragraph') {
      return {
        color: colors.black100,
        fontFamily: 'Sneak-Regular',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        fontStyle: 'normal',
      };
    }
    if (type === 'note') {
      return {
        fontFamily: 'Sneak-Regular',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16,
        fontStyle: 'normal',
      };
    }

    return;
  },
  color: (color) => {
    return { color };
  },
  fontSize: (size) => {
    return { fontSize: size };
  },
  fontFamily: (fontFamily) => {
    return { fontFamily };
  },
  fontWeight: (fontWeight) => {
    return { fontWeight: `${fontWeight}` };
  },
  lineHeight: (lineHeight) => {
    return { lineHeight };
  },
  letterSpacing: (letterSpacing) => {
    return { letterSpacing };
  },
  margin: ([top, right, bottom, left]) => {
    return {
      marginTop: top,
      marginBottom: bottom,
      marginLeft: left,
      marginRight: right,
    };
  },
  padding: ([top, right, bottom, left]) => {
    return {
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    };
  },
});
