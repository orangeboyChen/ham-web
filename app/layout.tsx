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
		<html lang='zh-cn'>
			<Head />
			<Body>{children}</Body>
		</html>
	);
}

const Head = () => {
	return <></>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<body suppressHydrationWarning>
			<Providers>{children}</Providers>
		</body>
	);
};
