import { NativeWindStyleSheet } from 'nativewind';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { getMyDetails } from '../../apis/loadUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Redirect } from 'expo-router';

NativeWindStyleSheet.setOutput({
	default: 'native',
});

export default function HomeLayout() {
	const { user, SetUser } = useContext(UserContext);

	// Only require authentication within the (app) group's layout as users
	// need to be able to access the (auth) group and sign in again.
	if (!user) {
		// On web, static rendering will stop here as the user is not authenticated
		// in the headless Node process that the pages are rendered in.
		return <Redirect href='/' />;
	}

	useEffect(() => {
		AsyncStorage.getItem('token').then((res) => {});
	}, []);

	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons name='home-outline' size={16} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='notification/index'
				options={{
					title: 'Notification',
					tabBarIcon: ({ color }) => (
						<Ionicons name='notifications-outline' size={16} color={color} />
					),
					tabBarBadge: 1,
				}}
			/>
			<Tabs.Screen
				name='request/index'
				options={{
					title: 'Pickup',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='dump-truck' size={16} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='contact/index'
				options={{
					title: 'Contact',
					tabBarIcon: ({ color }) => (
						<Ionicons name='call-outline' size={16} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='user/index'
				options={{
					title: 'User',
					tabBarIcon: ({ color }) => (
						<Ionicons name='person-outline' size={16} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
