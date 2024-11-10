import ChatMessages from '@/components/chat-messages';
import ChatHeader from '@/components/ui/chat-header';
import ChatInput from '@/components/ui/chat-input';
import InitUser from '@/lib/store/init-user';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
	const supabase = await createClient();

	const { data } = await supabase.auth.getUser();

	return (
		<>
			<div className='max-w-3xl mx-auto md:py-10 h-screen'>
				<div className='h-full border rounded-md flex flex-col'>
					<ChatHeader user={data.user || undefined} />
					<ChatMessages />
					<ChatInput />
				</div>
			</div>
			<InitUser user={data.user || undefined} />
		</>
	);
}
