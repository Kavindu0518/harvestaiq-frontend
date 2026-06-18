'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { Logo } from '@/components/logo';
import { TextLogo } from '@/components/text-logo';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export default function Header() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo isSingle={false} />
          </Box> */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextLogo />
          </Box>

          {/* Auth Buttons */}
          <Stack direction="row" spacing={2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => router.push('/auth/jwt/sign-in')}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/auth/jwt/sign-up')}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Sign Up
              </Button>
            </motion.div>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}