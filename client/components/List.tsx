import { View, Text } from 'react-native';
import RoundedPillIcon from '../assets/Icons/RoundedPillIcon';
import TabletIcon from '../assets/Icons/TabletIcon';
import WaterIcon from '../assets/Icons/WaterIcon';
import SedentaryIcon from '../assets/Icons/SedentaryIcon';

const List = ({ data }: any) => {
	return (
		<View
			className='px-2 py-2 mb-3 bg-white border border-gray-200 rounded-lg web:shadow-md'
			style={{
				shadowColor: 'rgba(0,0,0)',
				shadowOpacity: 0.2,
				shadowOffset: { width: 0, height: 5 },
				shadowRadius: 5,
				elevation: 5,
			}}
		>
			<View className='flex flex-row items-center'>
				<View className='relative p-1  h-10 w-[15%]'>
					<View className='absolute w-[72] h-[72] -top-3 -left-1'>
						{/* <PillBlob /> */}
					</View>
					<View className='w-full h-full'>
						{data.type === 'pill' ? (
							<RoundedPillIcon />
						) : data.type == 'tablet' ? (
							<TabletIcon />
						) : data.type == 'water' ? (
							<WaterIcon />
						) : (
							<SedentaryIcon />
						)}
					</View>
				</View>
				<View className='w-[85%] pr-2'>
					<View className='flex flex-row items-center justify-between'>
						<Text className='text-lg font-semibolds'>{data.name}</Text>
						<Text>{data.time}</Text>
					</View>

					<View>
						<Text className='text-sm text-gray-500'>Stock: {data.stock}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default List;
