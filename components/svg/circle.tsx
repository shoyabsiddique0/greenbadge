import * as React from 'react';
import Svg, {Rect, Circle, Defs, RadialGradient, Stop} from 'react-native-svg';

function Ring(props: Object) {
  return (
    <Svg width={158} height={158} viewBox="0 0 158 158" fill="none" {...props}>
      <Rect
        x={3}
        y={3}
        width={152}
        height={152}
        rx={76}
        fill="url(#paint0_radial_12_991)"
      />
      <Rect
        x={3}
        y={3}
        width={152}
        height={152}
        rx={76}
        stroke="url(#paint1_angular_12_991)"
        strokeWidth={6}
      />
      <Circle
        cx={142.5}
        cy={121.5}
        r={8}
        fill="#87D8D7"
        stroke="#fff"
        strokeWidth={3}
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_12_991"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 79 -79 0 79 79)">
          <Stop offset={0.755208} stopColor="#fff" />
          <Stop offset={1} stopColor="#BCD9D9" />
        </RadialGradient>
        <RadialGradient
          id="paint1_angular_12_991"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 79 -79 0 79 79)">
          <Stop offset={0.40625} stopColor="#FF8A00" />
          <Stop offset={0.5} stopColor="#78D4D4" />
          <Stop offset={0.796875} stopColor="#78D4D4" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default Ring;
