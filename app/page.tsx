import InitUser from '@/lib/store/init-user';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
	const supabase = await createClient();

	const { data } = await supabase.auth.getUser();

	return (
		<>
			<div className='max-w-3xl mx-auto m:py-10 h-screen'>page</div>
			<InitUser user={data.user || undefined} />
		</>
	);
}
