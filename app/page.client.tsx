'use client';

import { useRouter } from 'next/navigation';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { Link } from '@heroui/link';
import { useAuth } from '@/app/service/auth';
import NoSSRAvatar from '@/app/component/userinfo/NoSSRAvatar';
import dayjs from 'dayjs';

const getGreeting = () => {
	const hour = dayjs().hour();
	if (hour >= 0 && hour < 5) {
		return '还不睡吗';
	}
	if (hour >= 5 && hour < 6) {
		return '清晨好';
	} else if (hour >= 7 && hour < 12) {
		return '早上好';
	} else if (hour >= 12 && hour < 14) {
		return '中午好';
	} else if (hour >= 14 && hour < 18) {
		return '下午好';
	} else if (hour >= 18 && hour < 24) {
		return '晚上好';
	}
};

const Header = () => {
	const { logout } = useAuth();
	return (
		<div>
			<div className={'flex items-center gap-2 pb-8'}>
				<NoSSRAvatar className={'shrink-0'} />
				<Divider orientation={'vertical'} className={'h-4'} />
				<span>{getGreeting()}</span>
				<Link
					className={'cursor-pointer flex-shrink-0'}
					onPress={() => logout()}
				>
					退出登录
				</Link>
			</div>

			<h1 className={'text-3xl font-bold pb-8'}>工具台</h1>
		</div>
	);
};

const CardItem = () => {
	const router = useRouter();

	const onCardItemPressed = () => {
		router.push('/course-grade-stat');
	};

	return (
		<Card isPressable={true} onPress={onCardItemPressed}>
			<CardBody>
				<div
					className={
						'rounded-[6px] bg-gray-600/10 size-[32px] flex items-center justify-center'
					}
				>
					<p className={'text-[16px]'}>🏃</p>
				</div>
				<div className={'mt-2'}>
					<h4 className='text-black font-medium text-[24px] mb-[-4px]'>给分</h4>
					<span className='text-tiny text-gray/60 uppercase'>查看给分信息</span>
				</div>
			</CardBody>
			<CardFooter>
				<div className={'flex w-full justify-end'}>
					<span className={'material-icons-round justify-self-end'}>
						arrow_forward
					</span>
				</div>
			</CardFooter>
		</Card>
	);
};

export { Header, CardItem };
