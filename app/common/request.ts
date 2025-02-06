'use client';

import { JsRequestError } from '@/wasm/pkg';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/2/5 15:30
 */
const useRequest = () => {
	const router = useRouter();
	const request = useCallback(
		async <T>({ call }: { call: () => Promise<T> }) => {
			try {
				return await call();
			} catch (e) {
				if (e instanceof JsRequestError) {
					const code = e.code;
					if (code === 7 || code === 16) {
						localStorage.removeItem('userInfo');
						router.push('/login');
					}
					throw new Error(e.message);
				}
				throw e;
			}
		},
		[router]
	);
	return { request };
};

export default useRequest;
