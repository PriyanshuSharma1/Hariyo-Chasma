import { Text, View, ScrollView, Image, Pressable } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { getNotifications } from '../../../apis/notification';

import ip from '../../../utils/ip';

export default function NotificationPage() {
	const { user } = useContext(UserContext);
	const [notifications, setNotifications] = useState<any>([]);

	useEffect(() => {
		getNotificationsByAddress().then((res) => {
			console.log(res.notifications);
			setNotifications(res.notifications);
		});
	}, []);

	return (
		<ScrollView
			contentContainerStyle={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<View className='w-full p-4 pt-6 md:w-4/5 lg:w-3/5'>
				{notifications.length > 0 &&
					notifications.map((notification: any) => (
						<Pressable
							onPress={() => {}}
							key={notification._id}
							className='p-4 mb-8 bg-white rounded-lg md:p-6'
						>
							<View className='w-full overflow-hidden rounded-lg h-80'>
								<Image
									source={{ uri: ip + '/' + notification.image }}
									width={400}
									height={400}
									className='object-cover w-full h-full'
								/>
							</View>
							<View className='my-4'>
								<Text className='text-xl font-semibold'>
									{notification.message}
								</Text>
								<Text className='text-sm text-gray-500'>
									{new Date(notification.createdAt).toLocaleString()}
								</Text>
							</View>
						</Pressable>
					))}
			</View>
		</ScrollView>
	);
}
