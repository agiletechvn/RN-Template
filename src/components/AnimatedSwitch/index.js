import STYLES from '@src/styles';
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';

const AnimatedTouchableBox = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedSlideButton = ({ defaultValue = false, onChange }, ref) => {
  const valueRef = useRef(defaultValue);
  const animatedValue = useRef(new Animated.Value(defaultValue ? 1 : 0))
    .current;

  useImperativeHandle(ref, () => ({
    bounceBack: () => {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: valueRef.current ? 0 : 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: valueRef.current ? 0 : 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          valueRef.current = valueRef.current ? 0 : 1;
        }
      });
    },
  }));

  const toggle = () => {
    if (valueRef?.current) {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          valueRef.current = false;
          onChange && onChange(false);
        }
      });
    } else {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          valueRef.current = true;
          onChange && onChange(true);
        }
      });
    }
  };

  return (
    <AnimatedTouchableBox
      onPress={toggle}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [
              STYLES.light.disabled_color,
              STYLES.light.primary_color,
            ],
            extrapolate: 'clamp',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        },
      ]}
    >
      <Animated.View
        style={[
          styles.iconButton,
          {
            backgroundColor: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                STYLES.light.subtitle_color,
                STYLES.light.secondary_color,
              ],
              extrapolate: 'clamp',
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          },
          {
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 14],
                  extrapolate: 'clamp',
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              },
            ],
          },
        ]}
      />
    </AnimatedTouchableBox>
  );
};

export default forwardRef(AnimatedSlideButton);

const styles = StyleSheet.create({
  buttonContainer: {
    height: 20,
    width: 34,
    borderRadius: 10,
    justifyContent: 'center',
  },
  iconButton: {
    ...StyleSheet.absoluteFill,
    height: 16,
    width: 16,
    top: 2,
    right: 4,
    left: 2,
    bottom: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
