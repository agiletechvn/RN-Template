import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Box from '@src/components/Box';
import { hours, minutes } from './constants';
import { useDebounceFn } from '@umijs/hooks';

const AnimatedScrollWheelSample = () => {
  const scrollHours = useRef(new Animated.Value(0)).current;
  const scrollMinutes = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const debounceSnapHours = useDebounceFn((y) => {
    // let calculateIndex = 1;
    // for (let i = 0; i < hours.length; i++) {
    //   if (hours[i] * 60 - 30 <= y && y <= hours[i + 1] * 60 - 30) {
    //     calculateIndex = i + 1;
    //     break;
    //   }
    // }
    // hours[calculateIndex]);
  }, 250);

  return (
    <Box flexDirection="row">
      <Box flex={1} style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={60}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollHours },
                },
              },
            ],
            {
              useNativeDriver: true,
              listener: (event) => {
                debounceSnapHours?.run(event.nativeEvent.contentOffset.y);
              },
            },
          )}>
          {hours.map((hour) => {
            const scale = scrollHours.interpolate({
              inputRange: hours.map((e) => e * 60),
              outputRange: hours
                .map((e) => e)
                .fill(0.5)
                .fill(2, hour - 1, hour),
              extrapolate: 'clamp',
            });

            return (
              <Animated.View key={hour} style={styles.item}>
                {hour > 0 && hour < hours.length - 1 && (
                  <Animated.Text style={{ transform: [{ scale }] }}>
                    {hour}
                  </Animated.Text>
                )}
              </Animated.View>
            );
          })}
        </Animated.ScrollView>
      </Box>
      <Box flex={1} style={styles.container}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollMinutes },
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          )}>
          {minutes.map((minute) => {
            const scale = scrollMinutes.interpolate({
              inputRange: minutes.map((e) => e * 60),
              outputRange: minutes
                .map((e) => e)
                .fill(0.5)
                .fill(2, minute - 1, minute),
              extrapolate: 'clamp',
            });

            return (
              <Animated.View key={minute} style={styles.item}>
                {minute > 0 && minute < minutes.length - 1 && (
                  <Animated.Text style={{ transform: [{ scale }] }}>
                    {minute}
                  </Animated.Text>
                )}
              </Animated.View>
            );
          })}
        </Animated.ScrollView>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 180,
  },
});

export default AnimatedScrollWheelSample;
