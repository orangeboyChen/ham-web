import './globals.css';
import { Providers } from '@/app/providers';
import React from 'react';
import '@material-design-icons/font/index.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-cn">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
