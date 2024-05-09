import { View, Text, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import { createRequest, getRequestByUser } from '../../../apis/getRequests';
import { UserContext } from '../../../context/UserContext';

export default function RequestPage() {
	const animation = useRef(null);
	const [loading, setLoading] = useState(true);
	const [requested, setRequested] = useState(false);
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (!user) return;
		// TODO: Remove this hard coded user id
		getRequestByUser(user.user._id || '663ba2f36f129310b71c1dcb').then(
			(res: any) => {
				console.log(res.data);
				if (res.data) {
					setRequested(true);
				}
				setLoading(false);
			}
		);
	}, []);

	const handleRequest = () => {
		// FIXME: Add async storage

		// createRequest({ user: user._id }).then((res: any) => {
		// 	return res.data;
		// });
		setRequested(true);
	};

	return (
		<View className='flex items-center justify-center w-full h-full'>
			<View className='flex items-center justify-center'>
				{/* lottie icons */}
				<View className='flex items-center justify-center w-64 h-64'>
					{
						<LottieView
							ref={animation}
							autoPlay
							loop
							source={
								requested
									? require('../../../assets/lottie/done.json')
									: require('../../../assets/lottie/dump-truck-animation.json')
							}
							style={{
								width: 200,
								height: 200,
							}}
						/>
					}
				</View>
				{/* button */}
				<View className='mt-2'>
					{!requested ? (
						<Pressable
							onPress={handleRequest}
							className='p-4 bg-white rounded-lg'
						>
							<Text className='font-semibold text-center'>Pickup Request</Text>
						</Pressable>
					) : (
						<Text className='text-sm text-center text-gray-700'>
							Request has already been sent.
						</Text>
					)}
				</View>
			</View>
		</View>
	);
}
