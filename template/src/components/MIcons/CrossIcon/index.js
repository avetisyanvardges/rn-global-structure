import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'utils';
import { Colors } from 'styles';

function CrossIcon({ width, height, color }) {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17 7L7 17M7 7l10 10"
        stroke={color || Colors.gray_cool['300']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CrossIcon;
