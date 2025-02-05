import { CheckQRCodeLoginResponse, LoginService } from '@/wasm/pkg';
import request from '@/app/common/request';

const getQRLoginTicket = async () => {
	return await request({
		call: () => LoginService.getQRCodeLoginTicket(),
	});
};

const checkQRLoginState = async ({
	ticket,
}: {
	ticket: string;
}): Promise<CheckQRCodeLoginResponse> => {
	return await request({
		call: () => LoginService.checkQRCodeLogin(ticket),
	});
};

export { getQRLoginTicket, checkQRLoginState };
