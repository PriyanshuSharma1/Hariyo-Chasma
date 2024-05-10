import {
	View,
	ScrollView,
	Text,
	Pressable,
	Platform,
	Image,
} from 'react-native';
import Ionicon from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const quickAccess = [
	{
		title: 'Notification',
		icon: <Ionicon name='notifications-outline' size={18} />,
	},
	{
		title: 'Pickup',
		icon: <MaterialCommunityIcons name='dump-truck' size={18} />,
	},
	{
		title: 'Announcement',
		icon: <Ionicon name='megaphone-outline' size={18} />,
	},
	{
		title: 'Perpetuators',
		icon: <MaterialCommunityIcons name='robber' size={18} />,
	},
];

export default function HomePage() {
	const { user } = useContext(UserContext);

	if (!user) {
		return <Text>Loading...</Text>;
	}

	return (
		<ScrollView
			className='w-full py-4'
			contentContainerStyle={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginBottom: 20,
			}}
		>
			<View className='flex items-center justify-center w-64 h-64 mb-4'>
				{Platform.OS === 'web' ? (
					<LottieView
						autoPlay
						loop
						source={require('../../assets/lottie/cctv.json')}
						style={{
							width: 200,
							height: 200,
						}}
					/>
				) : (
					<Image
						source={require('../../assets/cctv.gif')}
						width={400}
						height={400}
					/>
				)}
			</View>
			{/* container */}
			<View className='w-full p-4 md:p-0 md:mt-4 md:w-4/5'>
				{/* Greetings */}
				<View className='px-4 py-8 bg-white rounded-lg'>
					<Text className='text-xl font-semibold'>
						Welcome, {user.user.firstname}!
					</Text>
				</View>

				{/* dashboard */}
				<View className='w-full'>
					<Text className='mt-8 mb-4 text-xl font-semibold'>Quick Access</Text>
					{/* two column: notification, request, announcement, contact  */}
					<View>
						<View className='flex flex-row flex-wrap justify-between gap-x-[1%] gap-y-[3%]'>
							{quickAccess.map((item) => (
								<Pressable
									key={item.title}
									className='flex flex-row items-center w-[48%] p-4 bg-white rounded-lg'
								>
									<View className='mr-2'>{item.icon}</View>
									<Text className='text-lg font-semibold'>{item.title}</Text>
								</Pressable>
							))}
						</View>
					</View>

					{/* announcement */}
					<View className='mb-4'>
						<Text className='mt-8 mb-4 text-xl font-semibold'>
							Announcement
						</Text>
						<View className='flex flex-row items-center p-4 bg-white rounded-lg'>
							<View className='mr-2'>
								<Ionicon name='notifications-outline' size={24} />
							</View>
							<Text className='text-lg'>Cleaning Campaign</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
