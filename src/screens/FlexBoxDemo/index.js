import React from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import { ScrollView } from 'react-native';

const FlexBoxDemo = () => {
  return (
    <Box flex={1} padding={[4]} background="white">
      <ScrollView>
        <Typography type="h2">Flex column</Typography>
        <Box height={200} width={'100%'} background="rgba(0,0,0,0.5)">
          <Box flex={1} background="red" />
          <Box flex={2} background="blue" />
          <Box flex={1} background="orange" />
        </Box>

        <Typography type="h2">Flex column space-between</Typography>
        <Box
          background="rgba(0,0,0,0.5)"
          height={200}
          width={'100%'}
          justify="space-between"
          margin={[20, 0]}
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex column space-around</Typography>
        <Box
          background="rgba(0,0,0,0.5)"
          height={200}
          width={'100%'}
          justify="space-around"
          margin={[20, 0]}
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex column flex-start</Typography>
        <Box
          height={200}
          width={'100%'}
          justify="flex-start"
          margin={[20, 0]}
          background="rgba(0,0,0,0.5)"
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex column flex-end</Typography>
        <Box
          height={200}
          width={'100%'}
          justify="flex-end"
          margin={[20, 0]}
          background="rgba(0,0,0,0.5)"
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex row</Typography>
        <Box height={200} width={'100%'} background="rgba(0,0,0,0.5)">
          <Box flex={1} background="red" />
          <Box flex={2} background="blue" />
          <Box flex={1} background="orange" />
        </Box>

        <Typography type="h2">Flex row space-between</Typography>
        <Box
          flexDirection="row"
          background="rgba(0,0,0,0.5)"
          height={200}
          width={'100%'}
          justify="space-between"
          margin={[20, 0]}
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex row space-around</Typography>
        <Box
          flexDirection="row"
          background="rgba(0,0,0,0.5)"
          height={200}
          width={'100%'}
          justify="space-around"
          margin={[20, 0]}
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex row flex-start</Typography>
        <Box
          flexDirection="row"
          height={200}
          width={'100%'}
          justify="flex-start"
          margin={[20, 0]}
          background="rgba(0,0,0,0.5)"
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>

        <Typography type="h2">Flex row flex-end</Typography>
        <Box
          flexDirection="row"
          height={200}
          width={'100%'}
          justify="flex-end"
          margin={[20, 0]}
          background="rgba(0,0,0,0.5)"
        >
          <Box square={40} background="red" />
          <Box circle={40} background="blue" />
          <Box square={40} background="orange" />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default FlexBoxDemo;
