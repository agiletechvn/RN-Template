import Box from '@src/components/Box';
import ImageIcon from '@src/components/ImageIcon';
import { requiredField } from '@src/utils/common';
import { useMount } from '@umijs/hooks';
import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Animated, TextInput } from 'react-native';
import styles from './styles';

const Input = forwardRef(
  (
    {
      required,
      onChange,
      value,
      style,
      placeholder,
      containerStyle,
      inputStyle,
      onValueChange,
      disabled,
      meta,
      noDefaultStyle,
      allowClear = true,
      suffix,
      prefix,
      hasError,
      type,
      editable = true,
      ...rest
    },
    ref,
  ) => {
    let cPlaceholder = placeholder;
    const inputRef = useRef();
    const [secure, setSecure] = useState(type === 'password');
    const animatedValue = useRef(new Animated.Value(0)).current;

    const toggle = () => setSecure(!secure);

    if (!!placeholder && required) {
      cPlaceholder = requiredField(placeholder);
    }

    const handleChangeEvent = nextValue => {
      onChange && onChange(nextValue);
      onValueChange && onValueChange(nextValue);
    };

    const onClear = () => {
      onChange && onChange('');
      onValueChange && onValueChange('');
    };

    const onTap = useCallback(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          return inputRef.current.focus();
        }
      });
    }, [animatedValue]);

    const onFocus = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          return inputRef.current.focus();
        }
      });
    };

    const onBlur = () => {
      if (!value) {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    };

    useImperativeHandle(ref, () => inputRef.current);

    useMount(() => {
      if (value) {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    });

    return (
      <Box
        style={[
          !noDefaultStyle && styles.container,
          !noDefaultStyle && disabled && styles.disabled,
          !noDefaultStyle && hasError && styles.errorContainer,
          !noDefaultStyle && value && styles.inputHaveValue,
          containerStyle,
        ]}
      >
        {prefix && <Box margin={[0, 0, 0, 5]}>{prefix}</Box>}
        <TextInput
          onFocus={onFocus}
          underlineColorAndroid="transparent"
          placeholderTextColor="#d9d9d9"
          editable={editable && !disabled}
          style={[!noDefaultStyle && styles.input, inputStyle]}
          autoCompleteType={'off'}
          autoCorrect={false}
          secureTextEntry={secure}
          onChangeText={handleChangeEvent}
          value={value}
          onBlur={onBlur}
          ref={inputRef}
          {...rest}
        />
        {!!cPlaceholder && (
          <Animated.Text
            onPress={onTap}
            style={[
              styles.placeholder,
              value && styles.haveValue,
              !noDefaultStyle && hasError && styles.errorPlaceholder,
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
        {editable && !!value && allowClear && (
          <ImageIcon
            name="delete_text"
            size={24}
            pressable
            onPress={onClear}
            boxProps={{
              square: 24,
              justify: 'center',
              align: 'center',
            }}
          />
        )}
        {type === 'password' && (
          <ImageIcon
            name={secure ? 'eye_show' : 'eye_hide'}
            size={24}
            pressable
            onPress={toggle}
            boxProps={{
              margin: [0, 5, 0, 0],
              square: 24,
              justify: 'center',
              align: 'center',
            }}
          />
        )}
        {suffix && <Box margin={[0, 5, 0, 0]}>{suffix}</Box>}
      </Box>
    );
  },
);

export default Input;
