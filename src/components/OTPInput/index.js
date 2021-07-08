import Box from '@src/components/Box';
import Text from '@src/components/Text';
import { StyleSheet, TextInput } from 'react-native';
import React, {
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
} from 'react';

import { useMount } from '@umijs/hooks';
import STYLES from '@src/styles';
import delay from 'lodash/delay';

const OTPInput = ({ onFulfill, maxLength = 6 }, ref) => {
  const inputRef = useRef();
  const [text, setText] = useState('');

  const handleInputChange = (value) => {
    setText(value);
    if (value.length === maxLength) {
      onFulfill && onFulfill();
    }
  };

  const array = new Array(6).fill(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current?.focus(),
    clear: () => setText(''),
  }));

  useMount(() => {
    delay(() => {
      inputRef?.current?.focus();
    }, 250);
  });

  return (
    <>
      <TextInput
        ref={inputRef}
        value={text}
        style={styles.otpInput}
        keyboardType="number-pad"
        onChangeText={handleInputChange}
        maxLength={maxLength}
      />
      <Box
        flexDirection="row"
        align="center"
        justify="center"
        pressable
        onPress={() => inputRef?.current?.focus()}
        margin={[0, 0, 10, 0]}
      >
        {array.map((_, index) => {
          const value = text[index];
          return (
            <Box
              key={index}
              justify="space-between"
              align="center"
              margin={[0, 8]}
              width={38}
            >
              {!value ? (
                <Box height={38} width={1} />
              ) : (
                <Text
                  fontSize={20}
                  lineHeight={30}
                  fontWeight={'700'}
                  margin={[0, 0, 8, 0]}
                >
                  {value}
                </Text>
              )}
              <Box
                width={'100%'}
                height={value ? 2 : 1}
                background={
                  value
                    ? STYLES.light.primary_color
                    : STYLES.light.disabled_color
                }
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default forwardRef(OTPInput);

const styles = StyleSheet.create({
  otpInput: {
    height: 0,
    width: 0,
  },
});
