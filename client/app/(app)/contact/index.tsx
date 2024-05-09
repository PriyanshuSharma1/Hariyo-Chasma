import { View, Text, Pressable } from 'react-native';
import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome6,
	Fontisto,
} from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const contacts = [
	{
		name: 'Police',
		number: '100',
		icon: <MaterialCommunityIcons name='police-badge' size={24} />,
	},
	{
		name: 'Fire',
		number: '101',
		icon: <FontAwesome6 name='fire' size={24} />,
	},
	{
		name: 'Ambulance',
		number: '102',
		icon: <Fontisto name='ambulance' size={24} />,
	},
];

export default function ContactPage() {
	const dailNumber = (number: string) => {
		const url = `tel:${number}`;
		Linking.canOpenURL(url)
			.then((supported) => {
				if (supported) {
					Linking.openURL(url);
				} else {
					console.log('Phone call not supported');
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<View className='flex items-center'>
			<View className='w-full p-4 md:w-4/5'>
				{/* <Text className='text-xl font-semibold'>Contacts</Text> */}
				{/* Emergency contact list */}

				{contacts.map((contact) => (
					<Pressable
						key={contact.number}
						onPress={() => dailNumber(contact.number)}
						className='flex flex-row items-center p-5 mb-4 bg-white rounded-lg'
					>
						<View className='mr-5'>{contact.icon}</View>
						<View>
							<Text className='text-lg font-semibold'>{contact.name}</Text>
							<Text className='text-sm text-gray-600'>{contact.number}</Text>
						</View>
					</Pressable>
				))}
			</View>
		</View>
	);
}
