import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const GreetingBlob = (props: SvgProps) => (
	<Svg viewBox='0 0 200 200' {...props}>
		<Path
			fill='#D0E2FF'
			d='M146.1 32.2C156.4 44 159 62 159.8 77.5c.9 15.5 0 28.6-1 44.8-.9 16.1-1.9 35.4-11.7 44.3-9.8 8.9-28.4 7.3-45.6 5.3-17.1-2.1-32.7-4.8-46.4-12.4-13.7-7.6-25.4-20.2-28.3-34.5-2.9-14.2 3.1-30 9.5-44.4 6.5-14.4 13.4-27.4 24.1-39C71.1 30 85.5 19.7 101.7 17.3c16.2-2.4 34.1 3.2 44.4 14.9Z'
		/>
	</Svg>
);
export default GreetingBlob;
