import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PillBlob = (props: SvgProps) => (
	<Svg viewBox='0 0 200 200' {...props}>
		<Path
			fill='#D0E2FF'
			d='M131.4 56.2c12.8 9.9 29.1 14.4 33.3 23.6 4.1 9.3-3.9 23.3-13.8 31.5-9.8 8.3-21.5 10.7-30.3 22.7-8.8 11.9-14.7 33.4-24.1 38.2-9.5 4.9-22.5-6.8-33.8-17.9-11.3-11.2-20.8-21.7-27.8-35.1-6.9-13.3-11.3-29.3-8.4-44.6C29.3 59.2 39.3 44.7 52.7 35c13.5-9.7 30.4-14.5 43.5-9.3 13.1 5.3 22.4 20.6 35.2 30.5Z'
		/>
	</Svg>
);
export default PillBlob;
