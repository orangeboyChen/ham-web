import { CheckQRCodeLoginResponse, LoginService } from '@/wasm/pkg';

const getQRLoginTicket = async () => {
	return await LoginService.getQRCodeLoginTicket();
};

const checkQRLoginState = async ({
	ticket,
}: {
	ticket: string;
}): Promise<CheckQRCodeLoginResponse> => {
	return await LoginService.checkQRCodeLogin(ticket);
};

export { getQRLoginTicket, checkQRLoginState };
