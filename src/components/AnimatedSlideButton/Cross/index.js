import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Cross = () => {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M3.68201 10.1819L10.046 3.81792"
        stroke="#222222"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.68201 3.81812L10.046 10.1821"
        stroke="#222222"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Cross;
