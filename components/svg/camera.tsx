import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function Camera() {
  return (
    <Svg width={40} height={40} viewBox="0 4 22 20" fill="none">
      <Path
        d="M2 9a2 2 0 012-2h2.28a1 1 0 00.948-.684l.544-1.632A1 1 0 018.721 4h6.558a1 1 0 01.949.684l.544 1.632a1 1 0 00.949.684H20a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9z"
        fill="#7E869E"
        fillOpacity={0.25}
      />
      <Path
        d="M13.5 5.5h-3"
        stroke="#222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={13} r={4} fill="#222" />
    </Svg>
  );
}

export default Camera;
