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
			<Head />
			<Body>{children}</Body>
		</html>
	);
}

const Head = () => {
	return (
		<head>
			<title>emm</title>
		</head>
	);
};

const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<body>
			<Providers>{children}</Providers>
		</body>
	);
};
