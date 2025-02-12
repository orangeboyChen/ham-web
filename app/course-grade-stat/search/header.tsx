/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/26 15:43
 */
import { SearchBar } from '@/app/component/SearchBar';
import { useCallback, useEffect, useState } from 'react';
import { Divider } from '@heroui/divider';
import { Link } from '@heroui/link';
import { JsCourseService, JsSearchScoreHitItem } from '@/wasm/pkg';
import { SearchBarItem } from '@/app/component/type';
import { useRouter } from 'next/navigation';
import { UserInfoAvatar } from '@/app/component/userinfo/UserInfoAvatar';
import _ from 'lodash';
import useRequest from '@/app/common/request';

const Header = ({ queryKeyword }: { queryKeyword: string }) => {
	const [inputKeyword, setInputKeyword] = useState(queryKeyword);
	const [searchResult, setSearchResult] = useState<
		SearchBarItem<JsSearchScoreHitItem>[]
	>([]);
	const router = useRouter();
	const { request } = useRequest();

	const searchScore = useCallback(
		(inputKeyword: string) => {
			request({
				call: () => JsCourseService.searchCourse(inputKeyword),
			}).then((r) => {
				const resultList: SearchBarItem<JsSearchScoreHitItem>[] = r.map(
					(item) => {
						return {
							text: item.hit,
							data: item,
						};
					}
				);
				setSearchResult(resultList);
			});
		},
		[request]
	);

	useEffect(() => {
		setInputKeyword(queryKeyword);
	}, [queryKeyword]);
	useEffect(() => {
		const debounce = _.debounce(() => {
			if (!inputKeyword.length) {
				return;
			}
			searchScore(inputKeyword);
			return () => debounce.cancel();
		}, 200);
	}, [inputKeyword, request, searchScore]);

	return (
		<div className={'bg-white sticky top-0 left-0'}>
			<div
				className={
					'py-4 flex items-center gap-4 ' +
					'px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48'
				}
			>
				<Link href='/course-grade-stat'>
					<span className={'material-icons-round text-purple-500 !text-[36px]'}>
						bar_chart
					</span>
				</Link>

				<div className={'w-full'}>
					<SearchBar
						hint={'输入课程名或讲师'}
						keyword={inputKeyword}
						searchResult={searchResult}
						onKeywordChange={setInputKeyword}
						onClickItem={(item) => {
							router.push(
								`/course-grade-stat/search?keyword=${item.data.value}`
							);
						}}
						className={'max-w-[48rem]'}
					/>
				</div>
				<div className={'justify-self-end'}>
					<UserInfoAvatar />
				</div>
			</div>
			<Divider />
		</div>
	);
};

export { Header };
