import { create } from 'zustand';

export type Imessage = {
	created_at: string;
	id: string;
	is_edit: boolean;
	send_by: string;
	text: string;
	users: {
		avatar_url: string;
		created_at: string;
		display_name: string;
		id: string;
	} | null;
};

interface MessageState {
	messages: Imessage[];
	actionMessage: Imessage | undefined;
	addMessage: (message: Imessage) => void;
	setActionMessage: (message: Imessage | undefined) => void;
	optimisticDeleteMessage: (messageId: string) => void;
}

export const useMessageState = create<MessageState>()((set) => ({
	messages: [],
	actionMessage: undefined,
	addMessage: (message) =>
		set((state: MessageState) => ({
			messages: [...state.messages, message],
		})),
	setActionMessage: (message) =>
		set(() => ({
			actionMessage: message,
		})),
	optimisticDeleteMessage: (messageId) =>
		set((state) => ({
			messages: state.messages.filter(
				(message) => message.id !== messageId
			),
		})),
}));
