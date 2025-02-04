'use client';

import { Search } from '@/app/course-grade-stat/search';
import Header from '@/app/course-grade-stat/header';

const Home = () => {
	return (
		<div
			className={
				'grid grid-rows-[60px_0.8fr_0.2fr_60px] items-center justify-items-center min-h-screen px-4 sm:px-20'
			}
		>
			<Header />
			<Search />
		</div>
	);
};

export default Home;
