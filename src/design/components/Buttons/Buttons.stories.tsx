import { Meta } from '@storybook/react';
import { ButtonContainedProps } from './interfaces';
import { ButtonContained as Contained } from '.';

export default {
	title: 'Components/Buttons',
	component: Contained,
	parameters: {
		controls: {
			sort: 'requiredFirst',
		},
	},
	args: {
		children: 'Button',
		color: 'primary',
		disabled: false,
		icon: 'gift',
	},
} as Meta<ButtonContainedProps>;

export function ButtonContained({ children, ...rest }: ButtonContainedProps) {
	return <Contained {...rest}>{children}</Contained>;
}
