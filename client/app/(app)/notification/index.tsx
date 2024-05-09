import { Text, View, Image } from 'react-native';

export default function NotificationPage() {
	return (
		<View className='flex items-center justify-center w-full'>
			{/* md */}
			<View className='w-full p-3 md:w-4/5'>
				<View className='p-4 bg-white rounded-lg '>
					<View className='w-full h-64 overflow-hidden rounded-lg'>
						<Image
							source={{ uri: 'https://i.pravatar.cc/400?u=123456' }}
							width={400}
							height={400}
							className='object-cover w-full h-full'
						/>
					</View>
					<View>
						<Text className='text-xl font-semibold'>28 Kilo @ Time</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
