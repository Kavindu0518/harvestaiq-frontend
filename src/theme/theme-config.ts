import type { Theme, Direction, ThemeProviderProps } from '@mui/material/styles';
import type { ThemeCssVariables } from './types';
import type { PaletteColorKey, PaletteColorNoChannels } from './core/palette';

export type ThemeConfig = {
  direction: Direction;
  classesPrefix: string;
  cssVariables: ThemeCssVariables;
  defaultMode: ThemeProviderProps<Theme>['defaultMode'];
  modeStorageKey: ThemeProviderProps<Theme>['modeStorageKey'];
  fontFamily: Record<'primary' | 'secondary', string>;
  palette: Record<PaletteColorKey, PaletteColorNoChannels> & {
    common: { black: string; white: string };
    grey: Record<${50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}, string>;
  };
};

export const themeConfig: ThemeConfig = {
  defaultMode: 'light',
  modeStorageKey: 'harvestaiq-theme-mode',
  direction: 'ltr',
  classesPrefix: 'harvest',
  cssVariables: {
    cssVarPrefix: 'harvest',
    colorSchemeSelector: 'data-color-scheme',
  },
  fontFamily: {
    primary: 'Inter, system-ui, -apple-system, sans-serif',
    secondary: 'Poppins, Inter, sans-serif',
  },
  palette: {
    primary: {
      lighter: '#C8FAD6',
      light: '#5BE49B',
      main: '#00A76F',
      dark: '#007867',
      darker: '#004B50',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#E8F3E8',
      light: '#A5D6A7',
      main: '#4CAF50',
      dark: '#2E7D32',
      darker: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    info: {
      lighter: '#CAFDF5',
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
      darker: '#003768',
      contrastText: '#FFFFFF',
    },
    success: {
      lighter: '#D3FCD2',
      light: '#77ED8B',
      main: '#22C55E',
      dark: '#118D57',
      darker: '#065E49',
      contrastText: '#FFFFFF',
    },
    warning: {
      lighter: '#FFF5CC',
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#1C252E',
    },
    error: {
      lighter: '#FFE9D5',
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
      darker: '#7A0916',
      contrastText: '#FFFFFF',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};
