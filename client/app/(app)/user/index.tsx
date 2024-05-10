import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	View,
	Text,
	TextInput,
	Image,
	Pressable,
	ScrollView,
} from 'react-native';

import ip from '../../../utils/ip';
import { useState, useEffect } from 'react';
import { getMyDetails } from '../../../apis/loadUser';

export default function UserPage() {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		getMyDetails().then((res) => {
			console.log(res.data.user);
			setUser(res.data.user);
		});
	}, []);

	if (!user) {
		return <Text>Loading...</Text>;
	}
	return (
		<ScrollView
			contentContainerStyle={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<View className='flex items-center justify-center w-full p-4 md:w-4/5 lg:w-3/5'>
				{/* Profile View */}
				<View className='w-32 h-32 overflow-hidden bg-white border-2 border-gray-300 rounded-full'>
					<Image
						source={{ uri: `${ip}/uploads/${user.photo}` }}
						width={100}
						height={100}
						alt='Profile Picture'
						className='object-cover w-full h-full'
					/>
				</View>
				{/* details */}
				<View className='w-full p-6 mt-4 bg-white rounded-lg'>
					<View className='flex flex-row gap-4 mb-4'>
						{/* name */}
						<View className='flex-1'>
							<Text className='text-sm font-semibold'>First Name</Text>
							<TextInput
								editable={true}
								className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
								value={user.firstname}
							/>
						</View>
						<View className='flex-1'>
							<Text className='text-sm font-semibold'>Last Name</Text>
							<TextInput
								editable={true}
								className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
								value={user.lastname}
							/>
						</View>
					</View>
					{/* phone */}
					<View className='mb-4'>
						<Text className='text-sm font-semibold'>Phone</Text>
						<TextInput
							editable={true}
							className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
							value={String(user.phone)}
						/>
					</View>
					{/* address */}
					<View className='mb-4'>
						<Text className='text-sm font-semibold'>Address</Text>
						<TextInput
							editable={true}
							className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
							value={user.address}
						/>
					</View>
					{/* community */}
					<View className='mb-4'>
						<Text className='text-sm font-semibold'>Community</Text>
						<TextInput
							editable={true}
							className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
							value={user.community}
						/>
					</View>
					{/* house number */}
					<View className='mb-4'>
						<Text className='text-sm font-semibold'>House Number</Text>
						<TextInput
							editable={true}
							className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
							value={String(user.houseNumber)}
						/>
					</View>

					<View className='flex flex-row justify-end gap-4'>
						<Pressable className='p-3 bg-blue-500 rounded-lg'>
							<Text className='text-center text-white'>Update</Text>
						</Pressable>
						<Pressable className='p-3 rounded-lg'>
							<Text className='text-center text-gray-600'>Cancel</Text>
						</Pressable>
					</View>
				</View>
				<View className='w-full'>
					<Pressable
						onPress={() => {
							AsyncStorage.removeItem('token').then(() =>
								console.log('logged out successfully')
							);
						}}
						className='p-3 mt-4 bg-red-500 rounded-lg'
					>
						<Text className='text-center text-white'>Logout</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
}
