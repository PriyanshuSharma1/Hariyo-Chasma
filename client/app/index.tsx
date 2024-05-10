import { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { UserContext } from '../context/UserContext';

import { router } from 'expo-router';
import { signin } from '../apis/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage() {
	const { user, setUser } = useContext(UserContext);
	const [phone, setPhone] = useState('9812345678');
	const [password, setPassword] = useState('manish123');

	const handleSubmit = () => {
		signin(parseInt(phone), password).then((res) => {
			setUser(res.data);
			console.log('data', res.data);
			AsyncStorage.setItem('token', JSON.stringify(res.data.token)).then(() => {
				console.log('Signed in successullly');
				router.push('/(app)/');
			});
		});
	};

	return (
		<View className='flex items-center justify-center w-full h-full bg-gray-300'>
			<View className='w-full md:w-3/5 lg:w-2/5'>
				{/* create a login form */}
				<View className='flex items-center justify-center p-6 bg-white rounded-lg'>
					{/* phone */}
					<View className='w-full mb-4'>
						<Text className='text-sm font-semibold'>Phone</Text>
						<TextInput
							editable={true}
							className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
							value={phone}
							onChangeText={(text) => setPhone(text)}
						/>
					</View>
					{/* phone */}
					<View className='w-full mb-4'>
						<Text className='text-sm font-semibold'>Password</Text>
						<TextInput
							secureTextEntry={true}
							editable={true}
							className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
					</View>

					<View className='flex flex-row justify-end gap-4'>
						<Pressable
							onPress={handleSubmit}
							className='p-3 bg-blue-500 rounded-lg'
						>
							<Text className='text-center text-white'>Signin</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
}
