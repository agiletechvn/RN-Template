import Box from '@src/components/Box';
import CustomText from '@src/components/Text';
import STYLES from '@src/styles';
import React from 'react';
import styles from './styles';

const Checkbox = ({
  required,
  onChange,
  value,
  style,
  placeholder,
  containerStyle,
  inputStyle,
  children,
  disabled,
  onValueChange,
  ...rest
}) => {
  let backgroundColor = 'white';
  if (value) {
    backgroundColor = STYLES.primaryColor;
  }
  if (disabled) {
    backgroundColor = STYLES.disableColor;
  }

  const handleChangeEvent = () => {
    onChange && onChange(!value);
    onValueChange && onValueChange(!value);
  };

  return (
    <Box pressable onPress={handleChangeEvent} disabled={disabled} {...rest}>
      <Box margin={[10, 0]} flexDirection="row" align="center">
        <Box
          style={[
            styles.box,
            {
              backgroundColor,
              borderColor: disabled ? STYLES.disableColor : STYLES.primaryColor,
            },
          ]}
        >
          {value && <Box style={styles.icon} />}
        </Box>
        <CustomText style={styles.label}>{children}</CustomText>
      </Box>
    </Box>
  );
};

export default Checkbox;
