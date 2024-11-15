import { Imessage, useMessageState } from '@/lib/store/messages';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	// DropdownMenuLabel,
	// DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useUserState } from '@/lib/store/user';

const Message = ({ message }: { message: Imessage }) => {
	const user = useUserState((state) => state.user);

	return (
		<div className='flex gap-2'>
			<Avatar className='ring-2 ring-foreground/90'>
				<AvatarImage
					src={message.users?.avatar_url}
					alt={message.users?.display_name}
				/>
				<AvatarFallback>
					{message.users?.display_name.slice(0, 1).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className='flex-1'>
				<div className='flex items-center justify-between'>
					<div className='flex gap-1 items-center'>
						<h1 className='font-bold text-foreground/90'>
							{message.users?.display_name}
						</h1>
						<h1 className='text-sm text-muted-foreground/90 font-jetbrains_mono'>
							{new Date(message.created_at)
								.toLocaleString()
								.replace(',', '')}
						</h1>
					</div>
					{message.users?.id === user?.id && (
						<MessageMenu message={message} />
					)}
				</div>
				<p className='text-muted-foreground'>{message.text}</p>
			</div>
		</div>
	);
};
export default Message;

const MessageMenu = ({ message }: { message: Imessage }) => {
	const setActionMessage = useMessageState((state) => state.setActionMessage);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreHorizontal />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{/* <DropdownMenuLabel>Action</DropdownMenuLabel>
				<DropdownMenuSeparator /> */}
				<DropdownMenuItem className='cursor-pointer'>
					<Edit /> Edit
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						const trigger = document.getElementById(
							'action-trigger-delete'
						);
						if (trigger) {
							trigger.click();
						}

						setActionMessage(message);
					}}
					className='bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer'>
					<Trash /> Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
