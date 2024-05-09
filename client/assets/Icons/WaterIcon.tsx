import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const WaterIcon = (props: SvgProps) => (
	<Svg viewBox='0 0 500 500' {...props}>
		<Path
			d='M332.6 259.4 255 101.8l-78.4 157.6c-4.8 10.4-8 22.4-8 35.2.8 47.2 39.2 85.6 86.4 85.6s85.6-38.4 85.6-85.6c0-12-3.2-24-8-35.2Z'
			fill='#00a1ad'
		/>
		<Path
			d='M255 380.2c47.2 0 85.6-38.4 85.6-85.6 0-12.8-2.4-24.8-7.2-35.2L255 101.8'
			fill='#027f89'
		/>
		<Path
			d='M203.8 338.6c10.4 14.4 24 21.6 29.6 17.6 6.4-4.8 2.4-19.2-8-33.6-10.4-14.4-24-21.6-29.6-17.6-5.6 4-2.4 19.2 8 33.6Z'
			fill='#63d6d3'
		/>
	</Svg>
);
export default WaterIcon;
