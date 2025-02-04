import { LoginService } from '@/wasm/pkg';

const getQRLoginTicket = async () => {
	return await LoginService.getQRCodeLoginTicket();
};

const checkQRLoginState = async ({ ticket }: { ticket: string }) => {
	return await LoginService.checkQRCodeLogin(ticket);
};

export { getQRLoginTicket, checkQRLoginState };
