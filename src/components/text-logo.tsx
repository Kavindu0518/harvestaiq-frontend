'use client';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export function TextLogo() {
  const theme = useTheme();

  return (
    <Link href="/" underline="none" sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Typography
        variant="h4"
        component="span"
        sx={{
          fontWeight: 800,
          letterSpacing: '-0.5px',
          color: 'text.primary',
        }}
      >
        Harvest
        <Box 
          component="span" 
          sx={{ 
            color: theme.palette.primary.main, // කොළ පාට
            fontWeight: 900,
          }}
        >
          AIQ
        </Box>
      </Typography>
    </Link>
  );
}