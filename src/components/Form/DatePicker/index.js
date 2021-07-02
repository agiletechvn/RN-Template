import Box from '@src/components/Box';
import Text from '@src/components/Text';
import { requiredField } from '@src/utils/common';
import React, { useState, useRef, useEffect } from 'react';
import { Animated, Modal } from 'react-native';
import DateTimePicker from 'react-native-date-picker';
import styles from './styles';
import dayjs from 'dayjs';

const FORMAT_DATE = {
  datetime: 'DD/MM/YYYY hh:mm:ss a',
  date: 'DD/MM/YYYY',
  time: 'hh:mm:ss a',
};

const DatePicker = ({
  required,
  onChange,
  value,
  placeholder,
  onValueChange,
  disabled,
  selectContainerStyle,
  hasError,
  mode = 'time',
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  let cPlaceholder = placeholder;

  if (!!placeholder && required) {
    cPlaceholder = requiredField(placeholder);
  }

  const toggle = () => {
    setVisible(!visible);
  };

  const _onChange = date => {
    onChange && onChange(date);
    onValueChange && onValueChange(date);
  };

  useEffect(() => {
    if (value) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [animatedValue, value]);

  return (
    <>
      <Box
        height={55}
        padding={[0, 10]}
        style={[
          styles.selectContainer,
          value && styles.inputHaveValue,
          selectContainerStyle,
        ]}
        width={'100%'}
        flexDirection="row"
        background="white"
        pressable
        disabled={disabled}
        onPress={toggle}
        align="center"
      >
        {!!value && (
          <Text
            style={[!value && styles.placeholder, value && styles.haveValue]}
          >
            {dayjs(value).format(FORMAT_DATE[mode])}
          </Text>
        )}
        {!!cPlaceholder && (
          <Animated.Text
            style={[
              styles.placeholder,
              styles.haveValue,
              hasError && styles.errorPlaceholder,
              {
                transform: [
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 10],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -28],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          >
            {cPlaceholder}
          </Animated.Text>
        )}
      </Box>
      <Modal visible={visible} transparent>
        <Box
          flex={1}
          justify="flex-end"
          background={'rgba(0,0,0,0.5)'}
          onPress={toggle}
          pressable
        >
          <Box
            justify="center"
            align="center"
            background="white"
            pressable
            activeOpacity={1}
          >
            <DateTimePicker
              date={value || new Date()}
              mode={mode}
              disabled={disabled}
              onDateChange={_onChange}
              {...props}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DatePicker;
