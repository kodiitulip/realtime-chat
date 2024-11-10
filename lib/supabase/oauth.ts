import { SupabaseClient } from '@supabase/supabase-js';

export const signInWithGithub = async (supabase: SupabaseClient) => {
	return await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: location.origin + '/auth/callback',
		},
	});
};

export const signOut = async (supabase: SupabaseClient) => {
	return await supabase.auth.signOut();
};
