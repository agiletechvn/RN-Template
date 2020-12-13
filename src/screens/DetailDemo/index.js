import React from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import { StyleSheet, ActivityIndicator, Image } from 'react-native';

import colors from '@src/utils/colors';
import { useRequest } from '@umijs/hooks';
import { getUserDetail } from './services';

const DetailDemo = () => {
  const { loading, data } = useRequest(getUserDetail, {
    defaultParams: [{ id: 2 }],
  });

  if (loading) {
    return (
      <Box flexDirection="row" justify="center" align="center">
        <ActivityIndicator />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  const userDetail = data.data || undefined;

  return (
    <Box flex={1}>
      <Box
        padding={[0, 16]}
        margin={[16, 0, 0, 0]}
        flexDirection="row"
        align="center"
      >
        <Image
          source={{ uri: userDetail.avatar }}
          style={styles.image}
          resizeMode="cover"
        />
        <Box padding={[8, 16]}>
          <Typography type="h3">{`${userDetail.first_name} ${userDetail.last_name}`}</Typography>
          <Typography type="note" color={colors.black50}>
            {userDetail.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailDemo;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.black20,
  },
});
