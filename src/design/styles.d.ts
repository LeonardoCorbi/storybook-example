/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
	export interface DefaultTheme extends Readonly<typeof theme> {}
}
