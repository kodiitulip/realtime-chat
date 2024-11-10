'use client';

import { useEffect, useRef } from 'react';
import { Imessage, useMessageState } from './messages';

const InitMessages = ({ messages }: { messages: Imessage[] }) => {
	const initState = useRef(false);

	useEffect(() => {
		if (!initState.current) {
			useMessageState.setState({ messages });
		}

		initState.current = true;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
};
export default InitMessages;
