import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Search(props: Object) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11a6 6 0 1112 0 6 6 0 01-12 0zm6-8a8 8 0 104.813 14.391l3.48 3.316a1 1 0 001.414-1.414l-3.46-3.296A8 8 0 0011 3z"
        fill="#9DE27C"
      />
    </Svg>
  );
}

export default Search;
