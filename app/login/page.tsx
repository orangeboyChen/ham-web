'use client';

/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/28 00:07
 */
import Image from 'next/image';
import icon from '../../public/icon-1024.png';
import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import './page.scss';
import { getPasskeyCredentials } from '@/app/login/passkey';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';
import { checkQRLoginState, getQRLoginTicket } from '@/app/login/qrlogin';
import { Avatar } from '@heroui/avatar';
import { Link } from '@heroui/link';
import { CheckQRCodeLoginResponse } from '@/wasm/pkg';

const LoginPage = () => {
	return (
		<div
			className={
				'bg-black/10 min-h-screen flex justify-center items-center ' +
				'p-4 md:p-12'
			}
		>
			<div
				className={
					'grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] bg-white w-full rounded-[16px] ' +
					'p-6 md:p-12'
				}
			>
				<TitleLogo />
				<LoginBody />
			</div>
		</div>
	);
};

const TitleLogo = () => {
	return (
		<div className={'mb-4 flex flex-col items-center md:items-start'}>
			<Image src={icon} alt={'logo'} className={'size-16 rounded-[12px]'} />
			<h1 className={'text-2xl mt-3'}>登录Ham</h1>
			<div className={'text-sm'}>for Web</div>
		</div>
	);
};

const LoginBody = () => {
	const [qrCodeLoginTicket, setQrCodeLoginTicket] = useState('');
	const [qrCodeLoginResponse, setQrCodeLoginResponse] =
		useState<CheckQRCodeLoginResponse>();
	const doPasskeyLogin = () => {
		getPasskeyCredentials()
			.then()
			.catch((e) => console.error(e));
	};

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
	}, [qrCodeLoginTicket]);

	return (
		<div className={'flex flex-col justify-center items-center'}>
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

			<div className={'w-full'}>
				<div className={'flex items-center justify-center gap-4 m-2'}>
					<Divider className={'clear-no-shrink max-w-16'} />
					<span className={'shrink-0 text-sm text-gray-400'}>其它登录方式</span>
					<Divider className={'clear-no-shrink max-w-16'} />
				</div>
				<div className={'text-center'}>
					<Button onPress={doPasskeyLogin}>
						<span className={'material-icons-round'}>key</span>通过Passkey登录
					</Button>
					{/*<div className={'flex justify-center items-center gap-8 mt-4'}>*/}
					{/*	<div*/}
					{/*		className={*/}
					{/*			'rounded-[16px] size-[32px] bg-black/10 flex justify-center items-center cursor-pointer ' +*/}
					{/*			'hover:opacity-80 active:opacity-disabled transition-opacity'*/}
					{/*		}*/}
					{/*	>*/}
					{/*		<span className={'material-icons-round !text-[20px] text-black'}>*/}
					{/*			qr_code*/}
					{/*		</span>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
