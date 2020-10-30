import React from 'react';
import {
  //  StyleSheet,
  Text as RNText,
} from 'react-native';

const Text = ({ children, ...rest }) => {
  return <RNText {...rest}>{children}</RNText>;
};

// const styles = StyleSheet.create({
//   title: {},
//   subtitle: {}
// });

export default Text;
