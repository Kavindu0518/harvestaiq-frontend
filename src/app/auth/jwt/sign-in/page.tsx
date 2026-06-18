// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import Link from '@mui/material/Link';
// // import Alert from '@mui/material/Alert';
// // import { useTheme } from '@mui/material/styles';
// // import { Logo } from '@/components/logo';

// // export default function SignInPage() {
// //   const router = useRouter();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError('');
// //     setLoading(true);

// //     try {
// //       const res = await fetch('http://localhost:8080/api/v1/user/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         throw new Error(data.message || 'Invalid credentials');
// //       }

// //       localStorage.setItem('user', JSON.stringify(data));
// //       router.push('/dashboard');
// //     } catch (err: any) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
// //       <Container maxWidth="sm">
// //         <Card elevation={6} sx={{ borderRadius: 3, p: 2 }}>
// //           <CardContent>
// //             <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
// //               <Logo isSingle={false} />
// //             </Box>
// //             <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
// //               Welcome Back
// //             </Typography>
// //             <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 4 }}>
// //               Sign in to your HarvestAIQ account
// //             </Typography>

// //             {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

// //             <form onSubmit={handleSubmit}>
// //               <TextField fullWidth label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required sx={{ mb: 2 }} />
// //               <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required sx={{ mb: 3 }} />
// //               <Button type="submit" fullWidth variant="contained" size="large" disabled={loading} sx={{ py: 1.5, borderRadius: 2 }}>
// //                 {loading ? 'Signing in...' : 'Sign In'}
// //               </Button>
// //             </form>

// //             <Box sx={{ mt: 2, textAlign: 'center' }}>
// //               <Typography variant="body2">
// //                 Don't have an account?{' '}
// //                 <Link href="/auth/jwt/sign-up" underline="hover">Sign Up</Link>
// //               </Typography>
// //             </Box>
// //           </CardContent>
// //         </Card>
// //       </Container>
// //     </Box>
// //   );
// // }


// //up is no desing correct code



// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Alert from '@mui/material/Alert';
// import Box from '@mui/material/Box';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import AuthCard from '@/components/auth-card';

// export default function SignInPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const res = await fetch('http://localhost:8080/api/v1/user/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Invalid credentials');
//       }

//       localStorage.setItem('user', JSON.stringify(data));
//       router.push('/dashboard');
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthCard
//       title="Welcome Back"
//       subtitle="Sign in to your HarvestAIQ account"
//       footer={
//         <Box>
//           <Link href="/auth/jwt/sign-up" underline="hover" sx={{ fontWeight: 600 }}>
//             Don't have an account? Sign Up
//           </Link>
//         </Box>
//       }
//     >
//       {error && <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>{error}</Alert>}

//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Email Address"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           sx={{ mb: 3 }}
//           variant="outlined"
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           sx={{ mb: 3 }}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           size="large"
//           disabled={loading}
//           sx={{ py: 1.5, borderRadius: 3, fontSize: '1rem', boxShadow: 4 }}
//         >
//           {loading ? 'Signing in...' : 'Sign In'}
//         </Button>
//       </form>
//     </AuthCard>
//   );
// }



'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
} from '@mui/icons-material';

// Import the shared AuthCard
import AuthCard from '@/components/auth-card';

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

      setSuccess('Login successful! Redirecting to dashboard...');
      
      // Store user data (optional)
      localStorage.setItem('user', JSON.stringify(data));

      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Footer content for AuthCard
  const footerContent = (
    <Box>
      <Typography variant="body2" color="text.secondary">
        Don't have an account?{' '}
        <Link
          href="/auth/jwt/sign-up"
          style={{
            color: '#4CAF50',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  );

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to your HarvestAIQ account"
      footer={footerContent}
      maxWidth="sm" // 👈 මේක පටු විදියට තියන්න (Sign-Up එකට වඩා පොඩියි)
    >
      <Box component="form" onSubmit={handleSubmit}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {/* Email */}
        <TextField
          fullWidth
          size="small"
          label="Email Address *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Password */}
        <TextField
          fullWidth
          size="small"
          label="Password *"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Submit Button */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'none',
            background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
            },
            '&:disabled': {
              background: '#A5D6A7',
            },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
        </Button>
      </Box>
    </AuthCard>
  );
}