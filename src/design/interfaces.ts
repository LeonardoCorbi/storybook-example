import { DefaultTheme, ThemeProps } from 'styled-components';
import theme from './theme';

export type ThemeColors = keyof typeof theme.colors;
export type ThemeRoundness = keyof typeof theme.roundness;
export type ThemeBorders = keyof typeof theme.borders;
export type ThemeFonts = keyof typeof theme.fonts;

export type GetterResponse = (props: ThemeProps<DefaultTheme>) => string;