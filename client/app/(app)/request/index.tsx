import { View, Text, Pressable, Platform, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import { createRequest, getRequestByUser } from '../../../apis/getRequests';
import { UserContext } from '../../../context/UserContext';

export default function RequestPage() {
	const animation = useRef(null);
	const [requested, setRequested] = useState(false);
	const [loading, setLoading] = useState(true);
	const { user } = useContext(UserContext);

	useEffect(() => {
		getRequestByUser(user.user._id || '663ba2f36f129310b71c1dcb').then(
			(res: any) => {
				console.log(res);
				if (res) {
					setRequested(true);
				}
				setLoading(false);
			}
		);
	}, []);

	const handleRequest = () => {
		createRequest(user.user._id || '663ba2f36f129310b71c1dcb').then((res) => {
			console.log('Request sent');
			console.log(res);
			setRequested(true);
		});
	};

	return (
		<View className='flex items-center justify-center w-full h-full'>
			<View className='flex items-center justify-center'>
				{/* lottie icons */}
				<View className='flex items-center justify-center w-64 h-64'>
					{Platform.OS === 'web' ? (
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
					) : (
						<Image
							source={
								requested
									? require('../../../assets/done.gif')
									: require('../../../assets/animationTruck.gif')
							}
							style={{
								width: 200,
								height: 200,
							}}
						/>
					)}
				</View>
				{/* button */}
				<View className='mt-2 '>
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
