'use client';

import { useRouter } from 'next/navigation';
import { Listbox, ListboxItem } from '@heroui/listbox';
import { AvatarListLinkType } from '@/app/component/userinfo/type';
import { useAuth } from '@/app/service/auth';

const UserInfoAvatarListBox = () => {
	const router = useRouter();
	const { logout } = useAuth();
	return (
		<div>
			<Listbox
				aria-label='Actions'
				onAction={(key) => {
					if (key === AvatarListLinkType.LOGOUT) {
						logout();
					} else if (key === AvatarListLinkType.HOME) {
						router.push('/');
					}
				}}
			>
				<ListboxItem key={AvatarListLinkType.HOME}>返回工具台</ListboxItem>
				<ListboxItem key={AvatarListLinkType.LOGOUT} className={'text-red-500'}>
					退出登录
				</ListboxItem>
			</Listbox>
		</div>
	);
};

export default UserInfoAvatarListBox;
