import { useState, createContext } from 'react';

const UserContext = createContext<any>(null);

const UserProvider = ({ children }: { children: any }) => {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
