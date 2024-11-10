import { Suspense } from 'react';
import ListMessages from './list-messages';
import { createClient } from '@/lib/supabase/server';
import InitMessages from '@/lib/store/init-messages';

const ChatMessages = async () => {
	const supabase = await createClient();

	const { data } = await supabase.from('messages').select('*,users(*)');

	return (
		<Suspense fallback={'loading..'}>
			<ListMessages />
			<InitMessages messages={data || []} />
		</Suspense>
	);
};
export default ChatMessages;
