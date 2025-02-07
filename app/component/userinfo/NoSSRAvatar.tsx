'use client';

import { useUserInfo } from '@/app/common/userinfo';
import { Avatar } from '@heroui/avatar';
import dynamic from 'next/dynamic';

const NoSSRAvatar = ({ className = '' }: { className: string }) => {
	const [userInfo] = useUserInfo();
	return (
		<Avatar
			suppressHydrationWarning
			className={className}
			src={userInfo?.avatarUrl}
			disableAnimation={true}
		/>
	);
};

export default dynamic(() => Promise.resolve(NoSSRAvatar), { ssr: false });
