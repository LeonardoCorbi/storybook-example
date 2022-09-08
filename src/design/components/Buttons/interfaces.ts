import iconList from '../Icon/path';

export interface ButtonContainedProps {
	icon?: keyof typeof iconList;
	color?: 'primary' | 'secondary';
	children: React.ReactNode;
	disabled?: boolean;
}

export interface StyledContainedProps {
	color: 'primary' | 'secondary';
}
