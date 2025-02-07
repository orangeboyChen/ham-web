import { useUserInfo } from '@/app/common/userinfo';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/2/8 01:24
 */
const useAuth = () => {
	const [, setUserInfo] = useUserInfo();
	const router = useRouter();
	const logout = () => {
		setUserInfo(undefined);
		localStorage.removeItem('token');
		router.push('/login');
		toast.success('已退出登录');
	};

	return {
		logout,
	};
};

export default useAuth;
