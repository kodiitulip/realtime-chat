'use client';

import { Trash } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from './ui/alert-dialog';
import { useMessageState } from '@/lib/store/messages';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

export const DeleteAlert = () => {
	const actionMessage = useMessageState((state) => state.actionMessage);
	const optimisticDeleteMessage = useMessageState(
		(state) => state.optimisticDeleteMessage
	);

	const handleDeleteMessage = async () => {
		const supabase = createClient();

		if (actionMessage?.id) {
			optimisticDeleteMessage(actionMessage.id);

			const { error } = await supabase
				.from('messages')
				.delete()
				.eq('id', actionMessage.id);

			if (error) toast.error(error.message);
			else toast.success('Successfully deleted a message');
		} else {
			toast.error('Something went wrong! Message id is null!');
		}
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<button
					tabIndex={-1}
					id='action-trigger-delete'></button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you <span className='italic'>sure</span> ?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action can not be undone. It will permanently
						delete your message.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={handleDeleteMessage}
						className='bg-destructive text-destructive-foreground hover:bg-destructive/90'>
						<Trash /> Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
