import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Tick = () => {
  return (
    <Svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M1.14282 3.72727L3.86551 7L8.85711 1"
        stroke="white"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Tick;
