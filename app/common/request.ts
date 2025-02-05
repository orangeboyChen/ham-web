import { JsRequestError } from '@/wasm/pkg';
import { router } from 'next/client';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/2/5 15:30
 */
const request = async <T>({ call }: { call: () => Promise<T> }) => {
	try {
		return await call();
	} catch (e) {
		if (e instanceof JsRequestError) {
			const code = e.code;
			if (code === 7 || code === 16) {
				localStorage.removeItem('userInfo');
				await router.push('/login');
			}
			throw new Error(e.message);
		}
		throw e;
	}
};

export default request;
