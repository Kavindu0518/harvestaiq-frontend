export function varAlpha(channel: string, opacity: number): string {
  if (!channel) return gba(0, 0, 0, );
  const values = channel.split(',');
  if (values.length === 3) {
    return gba(, , , );
  }
  return channel;
}

export function parseCssVar(cssVar: string): string {
  return cssVar;
}

export function hexToRgbChannel(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0,0,0';
  return ${parseInt(result[1], 16)}, , ;
}

export function createPaletteChannel<T extends Record<string, string>>(colors: T): T & {
  [K in keyof T as ${K & string}Channel]: string;
} {
  const result = { ...colors } as any;
  Object.keys(colors).forEach((key) => {
    const color = colors[key];
    if (typeof color === 'string' && color.startsWith('#')) {
      result[${key}Channel] = hexToRgbChannel(color);
    } else {
      result[${key}Channel] = color;
    }
  });
  return result;
}

export function mergeClasses(...classes: (string | undefined | false | Record<string, boolean>)[]): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .join(' ');
}

export function setFont(fontFamily: string): string {
  return fontFamily;
}

export function pxToRem(px: number): string {
  return ${px / 16}rem;
}

export function remToPx(rem: string): number {
  return parseFloat(rem) * 16;
}

export function isExternalLink(path: string): boolean {
  return path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:');
}

export function useId(): string {
  return Math.random().toString(36).substring(2, 11);
}

import React from 'react';
