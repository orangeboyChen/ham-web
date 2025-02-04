/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/28 00:24
 */
import { JsPasskeyService } from '@/wasm/pkg';

const getPasskeyCredentials = async () => {
	const options = await JsPasskeyService.get_credentials_request_options();
	console.info(options);
	options.publicKey.challenge = Buffer.from(
		options.publicKey.challenge,
		'base64'
	);
	return await navigator.credentials.get(options);
};

export { getPasskeyCredentials };
