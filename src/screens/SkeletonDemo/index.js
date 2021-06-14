import React from 'react';
import {Animated} from 'react-native';
import styles from './styles';
import useOpacityLoop from '@src/hooks/useOpacityLoop';

const SekeletonDemo = () => {
  const {opacity} = useOpacityLoop();

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={styles.cardHeader}>
        <Animated.View style={[styles.bank, {opacity}]} />
        <Animated.View style={[styles.image, {opacity}]} />
      </Animated.View>
      <Animated.View style={[styles.line, {opacity}]} />
      <Animated.View style={[styles.line, {opacity}]} />
      <Animated.View style={[styles.line, {opacity}]} />
    </Animated.View>
  );
};

export default SekeletonDemo;
