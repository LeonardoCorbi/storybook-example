import { GetterResponse, ThemeBorders, ThemeColors, ThemeFonts, ThemeRoundness } from './interfaces';

export const getThemeColor = (color?: ThemeColors): GetterResponse => {
	return (props) => props.theme.colors[color || 'neutral100'];
};

export const getThemeRoundness = (roundness?: ThemeRoundness): GetterResponse => {
	return (props) => props.theme.roundness[roundness || 'md'];
};

export const getThemeBorder = (border?: ThemeBorders): GetterResponse => {
	return (props) => props.theme.borders[border || 'md'];
};

export const getThemeFont = (font?: ThemeFonts): GetterResponse => {
	return (props) => props.theme.fonts[font || 'primary'];
};