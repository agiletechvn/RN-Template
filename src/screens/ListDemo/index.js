import React, { useState } from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import { FlatList, Image, StyleSheet } from 'react-native';
import useFlatList from '@src/hooks/useFlatList';
import { getUsers } from './services';
import colors from '@src/utils/colors';
import Input from '@src/components/Input';
import useInput from '@src/hooks/useInput';

const User = ({ item }) => {
  return (
    <Box
      padding={[0, 16]}
      margin={[16, 0, 0, 0]}
      flexDirection="row"
      align="center"
    >
      <Image
        source={{ uri: item.avatar }}
        style={styles.image}
        resizeMode="cover"
      />
      <Box padding={[8, 16]}>
        <Typography type="h3">{`${item.first_name} ${item.last_name}`}</Typography>
        <Typography type="note" color={colors.black50}>
          {item.email}
        </Typography>
      </Box>
    </Box>
  );
};

const ListDemo = () => {
  const [email, setEmail] = useState('');
  const inputProps = useInput();

  const { flatListProps } = useFlatList(
    (lastResult) => getUsers({ ...lastResult, email }),
    {
      refreshDeps: [email],
      isNoMore: (currentData) => {
        return currentData?.list?.length >= currentData.total;
      },
      debounceInterval: 500,
    },
  );

  return (
    <Box flex={1}>
      <Box
        padding={[8, 16]}
        margin={[16, 16, 0, 16]}
        flexDirection="row"
        background={colors.white}
      >
        <Input
          onChangeText={setEmail}
          style={styles.input}
          {...inputProps}
          placeholder={'Search event demo'}
        />
      </Box>
      <FlatList {...flatListProps} renderItem={User} />
    </Box>
  );
};

export default ListDemo;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.black20,
  },
  inputContainer: {
    flex: 1,
  },
});
