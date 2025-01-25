'use client';

import { Input } from '@heroui/input';
import './page.scss';
import { useEffect, useState } from 'react';
import { greet } from 'ham-web-wasm';
import Image from 'next/image';

const BarChart = ({
	className,
	width,
	height,
}: {
	className: string;
	width: number;
	height: number;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			className={className}
		>
			<path d="M6 20c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.1.9 2 2 2zm10-5v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2zm-4 5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2z" />
		</svg>
	);
};

export default function Home() {
	useEffect(() => {
		greet();
	});
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div></div>
			<div className={'flex-col justify-items-center space-y-4'}>
				<BarChart className={'bar-chart'} width={100} height={100} />
				<SearchBar />
			</div>
			<Input>123</Input>
		</div>
	);
}

const SearchBar = () => {
	const [keyword, setKeyword] = useState<string>('');
	return (
		<div className="searchbar-container">
			<div className="searchbar-input">
				<input
					maxLength={2048}
					placeholder={'来输入汉字'}
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</div>
		</div>
	);
};
