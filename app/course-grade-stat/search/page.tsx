import SearchResultClient from '@/app/course-grade-stat/search/page.client';
import { Metadata } from 'next';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/26 15:40
 */

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
	const params = (await searchParams) as never;
	return {
		title: params['keyword'] + ' | Ham',
	};
}

const SearchResult = () => {
	return <SearchResultClient />;
};

export default SearchResult;
