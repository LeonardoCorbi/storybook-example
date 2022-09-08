import styled, { css } from 'styled-components';
import { StyledContainedProps } from './interfaces';
import { getThemeBorder, getThemeColor, getThemeRoundness } from '../../helpers';

export const StyledContained = styled.button<StyledContainedProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	gap: 8px;

	background-color: ${getThemeColor('primary600')};
	border-radius: ${getThemeRoundness('md')};
	padding: 13px 32px;

	height: 42px;
	max-height: 42px;
	width: fit-content;

	color: ${getThemeColor('neutral100')};
	cursor: pointer;
	line-height: 1;
	user-select: none;
	transition: all 200ms ease-in-out;

	path {
		transition: all 200ms ease-in-out;
	}

	${({ color }) =>
		color === 'secondary' &&
		css`
			background-color: ${getThemeColor('secondary600')};
		`}

	&:focus-visible {
		outline: none;
		border: ${getThemeBorder('md', 'primary400')};

		${({ color }) =>
			color === 'secondary' &&
			css`
				border: ${getThemeBorder('md', 'secondary400')};
			`}
	}

	&:hover {
		background-color: ${getThemeColor('primary500')};

		${({ color }) =>
			color === 'secondary' &&
			css`
				background-color: ${getThemeColor('secondary500')};
			`}
	}

	&:active {
		background-color: ${getThemeColor('primary700')};

		${({ color }) =>
			color === 'secondary' &&
			css`
				background-color: ${getThemeColor('secondary700')};
			`}
	}

	&:disabled {
		background-color: ${getThemeColor('neutral200')};
		pointer-events: none;
		color: ${getThemeColor('neutral300')};

		path {
			fill: ${getThemeColor('neutral300')};
		}
	}
`;
