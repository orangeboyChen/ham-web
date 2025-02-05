import { SearchBar } from '@/app/component/SearchBar';
import { useEffect, useState } from 'react';
import { SearchBarItem } from '@/app/component/type';
import { JsCourseService } from '@/wasm/pkg';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/button';
import request from '@/app/common/request';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/26 01:09
 */

export const Search = () => {
	const [keyword, setKeyword] = useState('');
	const [searchBarItem, setSearchBarItem] = useState<SearchBarItem<string>[]>(
		[]
	);
	const router = useRouter();
	useEffect(() => {
		if (!keyword.replace(/ /g, '').length) {
			return;
		}
		const requestTimer = setTimeout(async () => {
			const hitResult = await request({
				call: () => JsCourseService.searchCourse(keyword),
			});
			const searchBarItemList: SearchBarItem<string>[] = hitResult.map(
				(item) => {
					return {
						text: item.hit,
						data: item.value,
					};
				}
			);
			setSearchBarItem(searchBarItemList);
		}, 200);
		return () => clearTimeout(requestTimer);
	}, [keyword]);

	return (
		<div className={'w-full flex flex-col justify-center items-center'}>
			<span className={'material-icons-round text-purple-500 !text-[72px]'}>
				bar_chart
			</span>
			<SearchBar
				className={'max-w-[480px] mt-8'}
				keyword={keyword}
				hint={'输入课程名或讲师'}
				searchResult={searchBarItem}
				focusInputOnLoad={true}
				onKeywordChange={(value) => {
					setKeyword(value);
				}}
				onClickItem={(item) => {
					router.push(`/course-grade-stat/search?keyword=${item.data}`);
				}}
			/>
			<Button
				className={'mt-8 bg-black/5'}
				onPress={() => {
					if (keyword.length) {
						router.push(`/course-grade-stat/search?keyword=${keyword}`);
					}
				}}
			>
				搜索
			</Button>
		</div>
	);
};
