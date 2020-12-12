import React from 'react';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import Typography from '../Typography';
import colors from '@src/utils/colors';

const Tag = ({ children }) => {
  return (
    <Box
      background={colors.black5}
      style={styles.tagContainer}
      padding={[4, 8]}
      align="center"
      justify="center"
    >
      <Typography type="h4">{children}</Typography>
    </Box>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 12,
    height: 24,
  },
});
