'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BiotechIcon from '@mui/icons-material/Biotech';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

// Import the Header component
import Header from '@/components/header'; 

export default function LandingPage() {
  const theme = useTheme();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth/jwt/sign-in');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating Animation Bubbles (Background) */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            opacity: 0.1,
            filter: 'blur(80px)',
          }}
        />
        <Box
          component={motion.div}
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            opacity: 0.1,
            filter: 'blur(60px)',
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    color: 'text.primary',
                    mb: 2,
                  }}
                >
                  Grow Smarter with{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    HarvestAIQ
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}
                >
                  AI-powered insights for your greenhouse. Monitor soil, manage crops, and get intelligent recommendations to maximize your yield.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleGetStarted}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 2,
                        boxShadow: theme.shadows[8],
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                  <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
                    Learn More
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    background: 'url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover',
                    boxShadow: theme.shadows[20],
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
                      borderRadius: 4,
                    }
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 6 }}>
          Why Choose HarvestAIQ?
        </Typography>
        <Grid container spacing={4}>
          {[
            { icon: <AgricultureIcon sx={{ fontSize: 40 }} />, title: 'Greenhouse Management', desc: 'Manage all your greenhouses in one place with real-time data.' },
            { icon: <BiotechIcon sx={{ fontSize: 40 }} />, title: 'AI Crop Analysis', desc: 'Get AI-driven recommendations for crop health and yield optimization.' },
            { icon: <WaterDropIcon sx={{ fontSize: 40 }} />, title: 'Smart Irrigation', desc: 'Monitor soil moisture and automate irrigation schedules.' },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', textAlign: 'center', p: 3, borderRadius: 3, boxShadow: theme.shadows[4] }}>
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}