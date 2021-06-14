import {useRef, useCallback} from 'react';
import {Animated} from 'react-native';
import {useMount} from '@umijs/hooks';

const useOpacityLoop = () => {
  const opacityRef = useRef(new Animated.Value(0)).current;

  const nextValue = useRef(1);

  const opacity = opacityRef.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  const animateLoop = useCallback(() => {
    Animated.timing(opacityRef, {
      toValue: nextValue.current,
      duration: 1000,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        nextValue.current = nextValue.current === 0 ? 1 : 0;
        animateLoop();
      }
    });
  }, [opacityRef]);

  useMount(() => {
    animateLoop();
  });

  return {opacity};
};

export default useOpacityLoop;
