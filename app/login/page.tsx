/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/28 00:07
 */
import './page.scss';
import { LoginBody, TitleLogo } from '@/app/login/components';

export async function generateMetadata() {
	return {
		title: '登录Ham',
	};
}

const LoginPage = () => {
	return (
		<div
			className={
				'bg-black/10 min-h-screen flex justify-center items-center ' +
				'px-4 md:px-12 lg:px-16 xl:px-32 2xl:px-48'
			}
		>
			<div
				className={
					'grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] bg-white rounded-[16px] ' +
					'p-6 md:p-12'
				}
			>
				<TitleLogo />
				<LoginBody />
			</div>
		</div>
	);
};

export default LoginPage;
