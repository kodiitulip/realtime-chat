'use client';

import { User } from '@supabase/supabase-js';
import { useEffect, useRef } from 'react';
import { useUserState } from './user';

const InitUser = ({ user }: { user: User | undefined }) => {
	const initState = useRef(false);

	useEffect(() => {
		if (!initState.current) {
			useUserState.setState({ user });
		}

		initState.current = true;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
};
export default InitUser;
