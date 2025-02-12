'use client';

import Image from 'next/image';
import icon from '@/public/icon-1024.png';
import usePasskey from '@/app/login/passkey';
import { LoginQRCode } from '@/app/login/loginQRCode';
import { Divider } from '@heroui/divider';
import { Button } from '@heroui/button';

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
	const { getPasskeyCredentials } = usePasskey();
	const doPasskeyLogin = () => {
		getPasskeyCredentials()
			.then()
			.catch((e) => console.error(e));
	};

	return (
		<div className={'flex flex-col justify-center items-center'}>
			<LoginQRCode />
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

export { TitleLogo, LoginBody };
