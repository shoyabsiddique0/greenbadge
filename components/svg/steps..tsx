import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function Steps(props: Object) {
  return (
    <Svg width={80} height={80} viewBox="0 0 56 56" fill="none" {...props}>
      <Circle cx={28} cy={28} r={28} fill="#6BC53F" fillOpacity={0.8} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.4 18.7l.868-.651a3 3 0 013.464-.096l3.815 2.543a3 3 0 001.664.504H35a4 4 0 014 4v.5a4.5 4.5 0 01-4.5 4.5H22a5 5 0 01-5-5v-5a2 2 0 013.2-1.6l.4.3c.83.622 1.97.622 2.8 0zm7.038 3.46l-3.815-2.543a1 1 0 00-1.155.032l-.868.651a4.334 4.334 0 01-5.2 0L19 20v5a3 3 0 003 3h12.5a2.5 2.5 0 002.5-2.5V25a2 2 0 00-2-2h-1.789a5 5 0 01-2.773-.84zM20 33a1 1 0 011-1h14a1 1 0 110 2H21a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 000-2h-6z"
        fill="#9DE27C"
      />
    </Svg>
  );
}

export default Steps;
