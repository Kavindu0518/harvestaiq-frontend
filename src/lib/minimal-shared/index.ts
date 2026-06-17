// export function varAlpha(channel: string, opacity: number): string {
//   if (!channel) return 
// gba(0, 0, 0, );
//   const values = channel.split(',');
//   if (values.length === 3) {
//     return 
// gba(, , , );
//   }
//   return channel;
// }

// export function parseCssVar(cssVar: string): string {
//   return cssVar;
// }

// export function hexToRgbChannel(hex: string): string {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   if (!result) return '0,0,0';
//   return ${parseInt(result[1], 16)}, , ;
// }

// export function createPaletteChannel<T extends Record<string, string>>(colors: T): T & {
//   [K in keyof T as ${K & string}Channel]: string;
// } {
//   const result = { ...colors } as any;
//   Object.keys(colors).forEach((key) => {
//     const color = colors[key];
//     if (typeof color === 'string' && color.startsWith('#')) {
//       result[${key}Channel] = hexToRgbChannel(color);
//     } else {
//       result[${key}Channel] = color;
//     }
//   });
//   return result;
// }

// export function mergeClasses(...classes: (string | undefined | false | Record<string, boolean>)[]): string {
//   return classes
//     .flatMap((cls) => {
//       if (!cls) return [];
//       if (typeof cls === 'string') return cls;
//       if (typeof cls === 'object') {
//         return Object.entries(cls)
//           .filter(([, value]) => value)
//           .map(([key]) => key);
//       }
//       return [];
//     })
//     .join(' ');
// }

// export function setFont(fontFamily: string): string {
//   return fontFamily;
// }

// export function pxToRem(px: number): string {
//   return ${px / 16}rem;
// }

// export function remToPx(rem: string): number {
//   return parseFloat(rem) * 16;
// }

// export function isExternalLink(path: string): boolean {
//   return path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:');
// }

// export function useId(): string {
//   return Math.random().toString(36).substring(2, 11);
// }

// import React from 'react';



// Helper to inject transparency alpha channel into hex or rgb/rgba string colors safely
export function varAlpha(colorStr: string, alpha: number = 1): string {
  if (!colorStr) return 'transparent';

  // If it's a CSS Variable Channel format e.g., 'var(--harvest-palette-grey-500Channel)'
  if (colorStr.includes('var(')) {
    return `rgba(${colorStr}, ${alpha})`;
  }

  // Handle standard hex strings (#ffffff or #fff)
  if (colorStr.startsWith('#')) {
    const hex = colorStr.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Fallback for standard rgba, rgb or plain strings
  return colorStr;
}

// Helper to dynamically build themed responsive/custom palette channels
export function createPaletteChannel<T extends Record<string, string>>(
  colors: T
): T & { [K in keyof T as `${string & K}Channel`]: string } {
  const result: Record<string, string> = { ...colors };

  Object.keys(colors).forEach((key) => {
    const value = colors[key];
    if (value.startsWith('#')) {
      const hex = value.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      result[`${key}Channel`] = `${r} ${g} ${b}`;
    }
  });

  return result as any;
}

// Converts pixels to rem for typography spacing configurations
export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}