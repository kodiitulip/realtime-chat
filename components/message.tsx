import { Imessage } from '@/lib/store/messages';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Message = ({ message }: { message: Imessage }) => {
	return (
		<div className='flex gap-2'>
			<Avatar>
				<AvatarImage
					src={message.users?.avatar_url}
					alt={message.users?.display_name}
				/>
				<AvatarFallback>
					{message.users?.display_name.slice(0, 1).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className='flex-1'>
				<div className='flex gap-1 items-center'>
					<h1 className='font-bold'>{message.users?.display_name}</h1>
					<h1 className='text-sm text-gray-400 font-jetbrains_mono'>
						{new Date(message.created_at)
							.toLocaleString('current', {
								day: '2-digit',
								month: '2-digit',
								year: '2-digit',
								hour: '2-digit',
								minute: '2-digit',
							})
							.replace(',', '')}
					</h1>
				</div>
				<p className='text-gray-300'>{message.text}</p>
			</div>
		</div>
	);
};
export default Message;
