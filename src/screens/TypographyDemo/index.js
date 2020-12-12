import React from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';

const TypographyDemo = () => {
  return (
    <Box flex={1} padding={[4]} background="white">
      <Typography type="h1">Lorem Ipsum</Typography>
      <Typography type="h2">Lorem Ipsum</Typography>
      <Typography type="h3">Lorem Ipsum</Typography>
      <Typography type="h4">Lorem Ipsum</Typography>
      <Typography type="paragraph">Lorem Ipsum</Typography>
      <Typography type="note">Lorem Ipsum</Typography>

      <Typography type="h1" color="red">
        Custom suitable style in typography component for each project.
      </Typography>
      <Typography type="h2" color="blue" numberOfLines={2}>
        Has all react native text property Has all react native text property
        Has all react native text property Has all react native text property
      </Typography>
      <Typography type="h3" color="gray">
        Lorem Ipsum
      </Typography>
      <Typography type="h4" color="green">
        Lorem Ipsum
      </Typography>
      <Typography type="note" color="green">
        Lorem Ipsum
      </Typography>
      <Typography type="paragraph" color="green">
        Lorem Ipsum
      </Typography>
    </Box>
  );
};

export default TypographyDemo;
