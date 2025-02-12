import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';
import UserInfoAvatarListBox from '@/app/component/userinfo/UserInfoAvatarListBox';
import NoSSRAvatar from '@/app/component/userinfo/NoSSRAvatar';

const UserInfoAvatar = () => {
	return (
		<Popover placement={'bottom'}>
			<PopoverTrigger>
				<div className={'size-[40px]'}>
					<NoSSRAvatar
						className={
							'cursor-pointer hover:opacity-80 active:opacity-disabled transition-opacity'
						}
					/>
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<UserInfoAvatarListBox />
			</PopoverContent>
		</Popover>
	);
};

export { UserInfoAvatar };
