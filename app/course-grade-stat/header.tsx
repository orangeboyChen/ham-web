import { Avatar } from '@heroui/avatar';
import { useUserInfo } from '@/app/common/userinfo';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/26 01:18
 */
const Header = () => {
	const [userInfo] = useUserInfo();
	return (
		<div className={'flex flex-row-reverse items-center w-full'}>
			<Avatar src={userInfo?.avatarUrl} />
		</div>
	);
};

export default Header;
