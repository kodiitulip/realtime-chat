'use client';

import { cn } from '@/lib/utils';
import { User } from '@supabase/supabase-js';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button } from './button';
import { createClient } from '@/lib/supabase/client';

type Header = {
	user: User | undefined;
};

const ChatHeader = ({
	user,
	className,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
	Header) => {
	const signInWithGithub = async () => {
		const supabase = createClient();

		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: location.origin + '/auth/callback',
			},
		});

		if (error) {
			console.error(error);
		}
	};

	const signOut = async () => {
		const supabase = createClient();

		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error(error);
		}
	};

	return (
		<div
			className={cn('h-20', className)}
			{...props}>
			<div className='p-5 border-b flex items-center justify-between h-full'>
				<div className=''>
					<h1 className='text-xl font-bold'>Daily Chat</h1>
					<div className='flex items-center gap-1'>
						<div className='size-4 bg-green-500 rounded-full animate-pulse'></div>
						<h1 className='text-sm text-gray-400'>2 online</h1>
					</div>
				</div>
				{user ? (
					<Button onClick={signOut}>Logout</Button>
				) : (
					<Button onClick={signInWithGithub}>Login</Button>
				)}
			</div>
		</div>
	);
};
export default ChatHeader;
