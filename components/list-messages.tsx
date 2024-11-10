'use client';

import { useMessageState } from '@/lib/store/messages';
import Message from './message';

const ListMessages = () => {
	const messages = useMessageState((state) => state.messages);

	return (
		<div className='flex-1 flex flex-col p-5 h-full overflow-y-auto'>
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
		</div>
	);
};
export default ListMessages;
