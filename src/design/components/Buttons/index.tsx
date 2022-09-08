import Icon from '../Icon';
import { ButtonContainedProps } from './interfaces';
import { StyledContained } from './styles';

export function ButtonContained({ icon, children, disabled = false, color = 'primary' }: ButtonContainedProps) {
	return (
		<StyledContained color={color} disabled={disabled}>
			{icon && <Icon name='gift' />}
			{children}
		</StyledContained>
	);
}