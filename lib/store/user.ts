import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

interface UserState {
	user: User | undefined;
}

export const useUserState = create<UserState>()(() => ({
	user: undefined,
}));
