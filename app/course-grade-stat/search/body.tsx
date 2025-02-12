/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/26 20:32
 */
import CourseGradeStatItem from '@/app/course-grade-stat/search/item';
import { JsCourseScoreItem } from '@/wasm/pkg';

const Body = ({ result }: { result: JsCourseScoreItem[] }) => {
	return (
		<div
			className={
				'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 pt-4 pb-8 max-w-[2196px] ' +
				'px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 2xl:px-48'
			}
		>
			{result.map((item, i) => {
				return <CourseGradeStatItem key={i} result={item} />;
			})}
		</div>
	);
};

export default Body;
