import { Imessage } from '@/lib/store/messages';
import Image from 'next/image';

const Message = ({ message }: { message: Imessage }) => {
	return (
		<div className='flex gap-2'>
			<div
				className='size-10 rounded-full relative
					overflow-hidden ring-2 ring-primary'>
				<Image
					// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
					src={message.users?.avatar_url!}
					// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
					alt={message.users?.display_name!}
					fill
					sizes='100%'
				/>
			</div>
			<div className='flex-1'>
				<div className='flex items-center gap-1'>
					<h1 className='font-bold'>{message.users?.display_name}</h1>
					<h1 className='text-sm text-gray-400'>
						{new Date(message.created_at).toDateString()}
					</h1>
				</div>
				<p className='text-gray-300'>{message.text}</p>
			</div>
		</div>
	);
};
export default Message;
