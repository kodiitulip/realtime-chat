'use client';

import { createClient } from '@/lib/supabase/client';
import { Input } from './input';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { useUserState } from '@/lib/store/user';
import { Imessage, useMessageState } from '@/lib/store/messages';

const ChatInput = () => {
	const user = useUserState((state) => state.user);

	const addMessage = useMessageState((state) => state.addMessage);

	const supabase = createClient();

	const handleSendMessage = async (text: string) => {
		if (text.trim()) {
			const newMessage = {
				id: uuidv4(),
				text,
				send_by: user?.id,
				is_edit: false,
				created_at: new Date().toISOString(),
				users: {
					id: user?.id,
					avatar_url: user?.user_metadata.avatar_url,
					created_at: new Date().toISOString(),
					display_name: user?.user_metadata.user_name,
				},
			};

			addMessage(newMessage as Imessage);

			const { error } = await supabase.from('messages').insert({ text });

			if (error) {
				toast.error(error.message);
			}
		} else {
			toast.error('Message can not be empty');
		}
	};

	return (
		<div className='p-5'>
			<Input
				placeholder='Send a message'
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSendMessage(e.currentTarget.value);
						e.currentTarget.value = '';
					}
				}}
			/>
		</div>
	);
};
export default ChatInput;
