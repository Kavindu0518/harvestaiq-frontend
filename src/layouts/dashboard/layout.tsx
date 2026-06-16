'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Logo } from '@/components/logo';
import { Iconify } from '@/components/iconify';
import { Scrollbar } from '@/components/scrollbar';
import { navData } from './nav-config-dashboard';

const DRAWER_WIDTH = 280;

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          bgcolor: 'background.paper',
          borderRight: 1px solid ,
          position: 'fixed',
          height: '100vh',
          overflow: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          ...(!open && { width: 0, display: 'none' }),
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2.5 }}>
          <Logo />
        </Box>
        <Scrollbar sx={{ height: 'calc(100% - 80px)' }}>
          {/* Navigation will be added here */}
          <Box sx={{ px: 2 }}>
            {navData.map((group) => (
              <Box key={group.subheader} sx={{ mb: 2 }}>
                <Box sx={{ px: 1.5, py: 1, typography: 'overline', color: 'text.secondary' }}>
                  {group.subheader}
                </Box>
                {group.items.map((item) => (
                  <Box
                    key={item.title}
                    component="a"
                    href={item.path}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 1.5,
                      py: 1,
                      borderRadius: 1,
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <item.icon fontSize="small" />
                    {item.title}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Scrollbar>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: calc(100% - px),
          ml: ${DRAWER_WIDTH}px,
          bgcolor: 'background.default',
          minHeight: '100vh',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          ...(!open && { width: '100%', ml: 0 }),
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <Iconify icon="eva:menu-2-outline" width={24} />
          </IconButton>
        </Box>
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
