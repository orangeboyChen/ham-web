'use client';

import { Input } from '@heroui/input';
import './page.scss';
import { useState } from 'react';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div></div>
			<div className={'flex-col justify-items-center space-y-4'}>
				{/*<BarChart className={'bar-chart'} width={100} height={100} />*/}
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
