// import type {
//   Theme,
//   Shadows,
//   Components,
//   ColorSystemOptions,
//   CssVarsThemeOptions,
//   SupportedColorScheme,
//   ThemeOptions as MuiThemeOptions,
// } from '@mui/material/styles';
// import type { CustomShadows } from './core/custom-shadows';

// export type ThemeColorScheme = SupportedColorScheme;
// export type ThemeCssVariables = Pick<
//   CssVarsThemeOptions,
//   'cssVarPrefix' | 'rootSelector' | 'colorSchemeSelector' | 'disableCssColorScheme' | 'shouldSkipGeneratingVar'
// >;

// type ColorSchemeOptionsExtended = ColorSystemOptions & {
//   shadows?: Partial<Shadows>;
//   customShadows?: Partial<CustomShadows>;
// };

// export type SchemesRecord<T> = Partial<Record<ThemeColorScheme, T>>;

// export type ThemeOptions = Omit<MuiThemeOptions, 'components'> &
//   Pick<CssVarsThemeOptions, 'defaultColorScheme'> & {
//     colorSchemes?: SchemesRecord<ColorSchemeOptionsExtended>;
//     cssVariables?: ThemeCssVariables;
//     components?: Components<Theme>;
//   };

// export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;



import type {
  Theme,
  Shadows,
  Components,
  ColorSystemOptions,
  SupportedColorScheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';

export type ThemeColorScheme = SupportedColorScheme;

// Safely typed replacement for CssVarsThemeOptions picking
export interface ThemeCssVariables {
  cssVarPrefix?: string;
  rootSelector?: string;
  colorSchemeSelector?: string;
  disableCssColorScheme?: boolean;
  shouldSkipGeneratingVar?: (keys: string[], value: string | number) => boolean;
}

type ColorSchemeOptionsExtended = ColorSystemOptions & {
  shadows?: Partial<Shadows>;
  customShadows?: Record<string, string>; // Fallback plain record to bypass missing core imports
};

export type SchemesRecord<T> = Partial<Record<ThemeColorScheme, T>>;

export type ThemeOptions = Omit<MuiThemeOptions, 'components'> & {
    defaultColorScheme?: string;
    colorSchemes?: SchemesRecord<ColorSchemeOptionsExtended>;
    cssVariables?: ThemeCssVariables;
    components?: Components<Theme>;
  };

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;