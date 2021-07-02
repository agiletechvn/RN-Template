import Box from '@src/components/Box';
import CustomText from '@src/components/Text';
import { requiredField } from '@src/utils/common';
import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import styles from './styles';

import { Modal, FlatList, Animated } from 'react-native';
import SelectItem from './SelectItem';
import Icon from '@src/components/Icon';

const Select = ({
  required,
  onChange,
  value,
  style,
  placeholder,
  options,
  containerStyle,
  inputStyle,
  multiple,
  onValueChange,
  selectContainerStyle,
  hasError,
  closeAfterChange,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  let cPlaceholder = placeholder;

  if (!!placeholder && required) {
    cPlaceholder = requiredField(placeholder);
  }

  const keyExtractor = useCallback(option => option.value, []);

  const toggle = () => {
    setVisible(!visible);
  };

  const handleChangeEvent = (nextValue, item) => {
    onChange && onChange(nextValue);
    onValueChange && onValueChange(nextValue, item);
    closeAfterChange && toggle();
  };

  const handleItemPress = item => {
    if (multiple) {
      // multiple selection case
      if (!value) {
        handleChangeEvent(item.value, item);
      } else {
        // unselected case
        if (!item.isSelected) {
          if (typeof value === 'string') {
            handleChangeEvent([value, item.value], item);
          } else {
            handleChangeEvent([...value, item.value], item);
          }
        } else {
          // selected case
          if (typeof value === 'string') {
            handleChangeEvent();
          } else {
            handleChangeEvent(
              value.filter(e => e !== item.value),
              item,
            );
          }
        }
      }
    } else {
      // single selection case
      if (item.isSelected) {
        handleChangeEvent();
      } else {
        handleChangeEvent(item.value, item);
      }
    }
  };

  const renderItem = ({ item }) => {
    const isSelected =
      value && typeof value === 'string'
        ? value === item.value
        : value?.includes(item.value);

    return (
      <SelectItem
        isSelected={isSelected}
        onPress={handleItemPress}
        option={item}
      />
    );
  };

  let selectedValue = '';

  if (value) {
    if (!multiple) {
      const selected = options?.find(e => e.value === value);
      if (selected) {
        selectedValue = selected.label;
      }
    } else {
      if (typeof value === 'string') {
        const selected = options?.find(e => e.value === value);
        if (selected) {
          selectedValue = options?.find(e => e.value === value)?.label;
        }
      } else {
        selectedValue = options
          ?.filter(e => value.includes(e.value))
          .map(e => e.label)
          .join(', ');
      }
    }
  }

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
          styles.inputHaveValue,
          selectContainerStyle,
        ]}
        width={'100%'}
        flexDirection="row"
        background="white"
        pressable
        onPress={toggle}
        align="center"
        {...rest}
      >
        {!!selectedValue && (
          <CustomText
            style={[!value && styles.placeholder, value && styles.haveValue]}
          >
            {selectedValue}
          </CustomText>
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
          background={'rgba(0,0,0,0.5)'}
          flex={1}
          pressable
          onPress={toggle}
          justify="flex-end"
        >
          <Box
            background="white"
            style={styles.container}
            pressable
            activeOpacity={1}
          >
            <Box
              flexDirection="row"
              justify="space-between"
              align="center"
              height={40}
              padding={[0, 10]}
            >
              <CustomText>{cPlaceholder}</CustomText>
              <Icon type="EvilIcons" name="close" size={26} onPress={toggle} />
            </Box>

            <FlatList
              contentContainerStyle={styles.listContainer}
              data={options}
              extraData={value}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Select;
