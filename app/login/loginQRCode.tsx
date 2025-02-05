/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/2/5 12:37
 */
import { checkQRLoginState, getQRLoginTicket } from '@/app/login/qrlogin';
import { useEffect, useState } from 'react';
import { CheckQRCodeLoginResponse } from '@/wasm/pkg';
import { Link } from '@heroui/link';
import { Avatar } from '@heroui/avatar';
import { QRCodeSVG } from 'qrcode.react';
import { useUserInfo } from '@/app/common/userinfo';

const LoginQRCode = () => {
	const [qrCodeLoginTicket, setQrCodeLoginTicket] = useState('');
	const [qrCodeLoginResponse, setQrCodeLoginResponse] =
		useState<CheckQRCodeLoginResponse>();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setUserInfo] = useUserInfo();
	const refreshQRCodeTicket = async () => {
		const qrCodeLoginTicket = await getQRLoginTicket();
		setQrCodeLoginTicket(qrCodeLoginTicket);
	};

	useEffect(() => {
		refreshQRCodeTicket().catch((e) => console.error(e));
	}, []);

	useEffect(() => {
		if (!qrCodeLoginTicket.length) {
			return;
		}

		let timer: number | undefined = undefined;
		const updateLoginTicketResponse = () => {
			checkQRLoginState({ ticket: qrCodeLoginTicket }).then((r) => {
				if (
					r.state ===
					CheckQRCodeLoginResponse.check_qr_code_login_state_login_success()
				) {
					setUserInfo({
						avatarUrl: r.scan_user_info!.avatar_url,
						nickname: r.scan_user_info!.nickname,
					});
				}
				setQrCodeLoginResponse(r);
				if (
					timer &&
					r.state !==
						CheckQRCodeLoginResponse.check_qr_code_login_state_pending()
				) {
					clearInterval(timer);
				}
			});
		};
		updateLoginTicketResponse();
		timer = window.setInterval(() => {
			updateLoginTicketResponse();
		}, 5000);
		return () => clearInterval(timer);
	}, [qrCodeLoginTicket, setUserInfo]);

	return (
		<div className={'flex flex-col items-center justify-center gap-4 mb-4'}>
			<div className={'text-sm'}>使用相机或Ham扫描二维码登录</div>

			<div className={'h-[128px]'}>
				{(!qrCodeLoginResponse ||
					qrCodeLoginResponse?.state ===
						CheckQRCodeLoginResponse.check_qr_code_login_state_pending()) &&
					qrCodeLoginTicket.length > 0 && (
						<QRCodeSVG
							value={`ham://qrcode-login?ticket=${qrCodeLoginTicket}`}
							size={128}
						/>
					)}
				{qrCodeLoginResponse?.state ===
					CheckQRCodeLoginResponse.check_qr_code_login_state_scanned() && (
					<div className={'flex flex-row items-center gap-2'}>
						<Avatar src={qrCodeLoginResponse.scan_user_info?.avatar_url} />
						<div className={'max-w-32'}>
							<div className={'overflow-ellipsis overflow-hidden font-bold'}>
								{qrCodeLoginResponse.scan_user_info?.nickname}
							</div>
							<div className={'text-sm'}>扫码成功，等待确认</div>
						</div>
					</div>
				)}
				{(qrCodeLoginResponse?.state ===
					CheckQRCodeLoginResponse.check_qr_code_login_state_invalid() ||
					qrCodeLoginResponse?.state ===
						CheckQRCodeLoginResponse.check_qr_code_login_state_expired()) && (
					<div className={'flex flex-col items-center gap-2 h-full'}>
						<div className={'text-[36px]'}>\(o_o)/</div>
						<div>{qrCodeLoginResponse?.message ?? '验证码已失效'}</div>
						<Link
							className={
								'flex flex-row items-center text-blue-500 cursor-pointer'
							}
							onPress={() => refreshQRCodeTicket()}
						>
							<div className={'material-icons-round'}>refresh</div>
							<div>刷新二维码</div>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export { LoginQRCode };
