import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '@src/utils/colors';

const Input = React.forwardRef(({ style, disabled, ...rest }, ref) => {
  const combinedStyle = ['color', 'fontSize', 'fontFamily']
    .map((e) => {
      if (rest[e]) {
        return styles[e](rest[e]);
      }
    })
    .filter((e) => e);

  return (
    <TextInput
      ref={ref}
      autoCapitalize={'none'}
      autoCorrect={false}
      maxLength={255}
      underlineColorAndroid="rgba(0,0,0,0)"
      selectionColor={colors.black100}
      editable={!disabled}
      {...rest}
      style={[styles.defaultStyle, combinedStyle, style]}
    />
  );
});

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    paddingVertical: 0,
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
});

export default Input;
