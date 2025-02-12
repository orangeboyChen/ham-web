import { Search } from '@/app/course-grade-stat/search';
import Header from '@/app/course-grade-stat/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '给分搜索 | Ham',
};

const Home = () => {
	return (
		<div
			className={
				'grid grid-rows-[104px_0.8fr_0.2fr_60px] items-center justify-items-center min-h-screen'
			}
		>
			<Header />
			<Search />
		</div>
	);
};

export default Home;
