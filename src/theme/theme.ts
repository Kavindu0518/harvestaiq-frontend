'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A76F',
      light: '#5BE49B',
      dark: '#007867',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4CAF50',
      light: '#A5D6A7',
      dark: '#2E7D32',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.04)',
    '0px 1px 3px rgba(0, 0, 0, 0.08)',
    '0px 2px 4px rgba(0, 0, 0, 0.08)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.08)',
    '0px 12px 24px rgba(0, 0, 0, 0.08)',
    '0px 16px 32px rgba(0, 0, 0, 0.08)',
    '0px 20px 40px rgba(0, 0, 0, 0.08)',
    '0px 24px 48px rgba(0, 0, 0, 0.08)',
    '0px 28px 56px rgba(0, 0, 0, 0.08)',
    '0px 32px 64px rgba(0, 0, 0, 0.08)',
    '0px 36px 72px rgba(0, 0, 0, 0.08)',
    '0px 40px 80px rgba(0, 0, 0, 0.08)',
    '0px 44px 88px rgba(0, 0, 0, 0.08)',
    '0px 48px 96px rgba(0, 0, 0, 0.08)',
    '0px 52px 104px rgba(0, 0, 0, 0.08)',
    '0px 56px 112px rgba(0, 0, 0, 0.08)',
    '0px 60px 120px rgba(0, 0, 0, 0.08)',
    '0px 64px 128px rgba(0, 0, 0, 0.08)',
    '0px 68px 136px rgba(0, 0, 0, 0.08)',
    '0px 72px 144px rgba(0, 0, 0, 0.08)',
    '0px 76px 152px rgba(0, 0, 0, 0.08)',
    '0px 80px 160px rgba(0, 0, 0, 0.08)',
    '0px 84px 168px rgba(0, 0, 0, 0.08)',
  ],
});

export default theme;