'use client';

import { useMessageState } from '@/lib/store/messages';
import Message from './message';
import { DeleteAlert } from './message-actions';

const ListMessages = () => {
	const messages = useMessageState((state) => state.messages);

	return (
		<div className='flex overflow-y-auto flex-col flex-1 p-5 h-full'>
			<div className='flex-1'></div>
			<div className='space-y-7'>
				{messages.map((value, index) => {
					return (
						<Message
							key={index}
							message={value}
						/>
					);
				})}
			</div>
			<DeleteAlert />
		</div>
	);
};
export default ListMessages;
