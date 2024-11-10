import type { Metadata } from 'next';
import { Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin', 'latin-ext'],
	style: ['italic', 'normal'],
	display: 'swap',
	preload: true,
});

export const jetBrainsMono = JetBrains_Mono({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin', 'latin-ext'],
	style: ['italic', 'normal'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'RealChat',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='dark'>
			<body className={`${poppins.className} antialiased`}>
				{children}
				<Toaster position='top-center' />
			</body>
		</html>
	);
}
