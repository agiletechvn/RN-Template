import React, { useCallback, useRef, useState, useEffect } from 'react';
import { StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import colors from '@src/utils/colors';
import Cross from './Cross';
import Tick from './Tick';

const AnimatedTouchableBox = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedSlideButton = () => {
  const [isOn, setIsOn] = useState(true);

  const translateX = useRef(new Animated.Value(0)).current;
  const translateColor = useRef(new Animated.Value(0)).current;

  const toggle = useCallback(() => {
    setIsOn(!isOn);
  }, [isOn]);

  useEffect(() => {
    if (isOn) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateColor, {
          toValue: 0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateColor, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [isOn, translateColor, translateX]);

  return (
    <AnimatedTouchableBox
      onPress={toggle}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: translateColor.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.white, colors.black5],
            extrapolate: 'clamp',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        },
      ]}
    >
      <Animated.View
        style={[
          styles.cross,
          styles.iconButton,
          {
            opacity: translateX.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
              extrapolate: 'clamp',
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 22],
                  extrapolate: 'clamp',
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              },
              {
                rotate: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '45deg'],
                  extrapolate: 'clamp',
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <Cross />
      </Animated.View>
      <Animated.View
        style={[
          styles.tick,
          styles.iconButton,
          {
            opacity: translateX.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 22],
                  extrapolate: 'clamp',
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <Tick />
      </Animated.View>
    </AnimatedTouchableBox>
  );
};

export default AnimatedSlideButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 64,
    borderColor: colors.black50,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
  },
  iconButton: {
    ...StyleSheet.absoluteFill,
    height: 32,
    width: 32,
    top: 3,
    right: 4,
    left: 4,
    bottom: 4,
    borderRadius: 16,
    borderColor: colors.black100,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    backgroundColor: colors.white,
  },
  tick: {
    backgroundColor: colors.black100,
  },
});
