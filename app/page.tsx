'use client';
/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/25 12:40
 */
import { Card, CardBody } from '@heroui/card';
import { useRouter } from 'next/navigation';
import { Avatar } from '@heroui/avatar';
import { Divider } from '@heroui/divider';
import { Link } from '@heroui/link';
import './page.scss';

const HomePage = () => {
	return (
		<div className={'p-8 sm:p-20 min-h-screen'}>
			<Header />
			<div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
				{[1, 2, 3, 4, 5].map((item, i) => {
					return (
						<CardItem key={item} word={item.toString().repeat((i + 1) * 50)} />
					);
				})}
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div>
			<div className={'flex items-center gap-2 pb-8'}>
				<Avatar name={'abc'} className={'flex-shrink-0'} />
				<Divider orientation={'vertical'} className={'h-4'} />
				<span>Good Afternoon</span>
				<Link
					className={'cursor-pointer flex-shrink-0'}
					onPress={() => console.log('exit')}
				>
					登出
				</Link>
			</div>

			<h1 className={'text-3xl font-bold pb-8'}>工具台</h1>
		</div>
	);
};

const CardItem = ({ word }: { word: string }) => {
	const router = useRouter();

	const onCardItemPressed = () => {
		// router.push('/1');
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
					<h4 className="text-black font-medium text-large mb-[-8px]">
						Stream the Acme event
					</h4>
					<span className="text-tiny text-gray/60 uppercase font-bold">
						What to watch
					</span>
				</div>
				<div className={'text-right'}>
					<span className={'material-icons-round'}>arrow_forward</span>
				</div>
			</CardBody>
		</Card>
	);
};

export default HomePage;
