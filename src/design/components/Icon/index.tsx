/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { IconProps } from './interfaces';
import { ReactComponent as GiftIcon } from '../../assets/icons/gift.svg';

export default function Icon({ name }: IconProps) {
	if (name === 'gift') return <GiftIcon />;

	return <></>;
}