import React from 'react';
import Box from '@src/components/Box';
import CustomText from '@src/components/Text';
import ImageIcon from '@src/components/ImageIcon';

const SelectItem = ({ option, isSelected, onPress }) => {
  const handlePress = () => {
    onPress && onPress({ ...option, isSelected });
  };

  return (
    <Box
      pressable
      height={50}
      padding={[0, 10]}
      onPress={handlePress}
      flexDirection="row"
      justify="space-between"
      align="center"
    >
      <CustomText>{option.label}</CustomText>
      {isSelected && <ImageIcon name="check" size={18} />}
    </Box>
  );
};

export default SelectItem;
