'use client';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/26 15:40
 */
import { Header } from '@/app/course-grade-stat/search/header';
import Body from '@/app/course-grade-stat/search/body';
import { useEffect, useState } from 'react';
import {
	JsCourseGradeStatisticsItemOrder,
	JsCourseScoreItem,
	JsCourseScoreItemType,
	JsScoreService,
} from '@/wasm/pkg';
import { useSearchParams } from 'next/navigation';
import request from '@/app/common/request';

const SearchResult = () => {
	const query = useSearchParams();
	const keyword = query.get('keyword') ?? '';
	const [result, setResult] = useState<JsCourseScoreItem[]>([]);
	useEffect(() => {
		request({
			call: () =>
				JsScoreService.getScoreStat(
					JsCourseScoreItemType.courseName(),
					keyword,
					JsCourseGradeStatisticsItemOrder.scoreDesc()
				),
		}).then((r) => setResult(r));
	}, [keyword]);

	return (
		<div className={'min-h-screen h-full bg-black/5'}>
			<div className={'h-[8px] bg-white'} />
			<Header queryKeyword={keyword} />
			<Body result={result} />
		</div>
	);
};

export default SearchResult;
