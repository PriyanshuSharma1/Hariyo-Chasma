import { UserProvider } from '../context/UserContext';
import { Slot } from 'expo-router';

export default function HomeLayout() {
	return (
		<UserProvider>
			<Slot />
		</UserProvider>
	);
}
