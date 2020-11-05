import colors from '@src/utils/colors';
import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Typography from '../Typography';

const Button = ({ children, loading, style, type, title, ...rest }) => {
  let buttonType = type || 'default';

  if (loading) {
    buttonType = 'disabled';
  }

  let color = colors.white;

  if (buttonType === 'default') {
    color = colors.black;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.65}
      disabled={loading}
      {...rest}
      style={[styles.defaultStyle, styles[buttonType]]}
    >
      <Typography
        fontSize={14}
        marginRight={12}
        fontFamily="Roboto-Bold"
        color={color}
      >
        {title}
      </Typography>
      {loading && <ActivityIndicator color={colors.white} />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    flex: 1,
  },
  default: {
    backgroundColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
  },
  disabled: {
    backgroundColor: colors.gray,
  },
  primary: {
    backgroundColor: colors.green,
  },
});
