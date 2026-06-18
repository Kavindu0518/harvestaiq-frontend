// // // 'use client';

// // // import { useState } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Box from '@mui/material/Box';
// // // import Card from '@mui/material/Card';
// // // import CardContent from '@mui/material/CardContent';
// // // import TextField from '@mui/material/TextField';
// // // import Button from '@mui/material/Button';
// // // import Typography from '@mui/material/Typography';
// // // import Container from '@mui/material/Container';
// // // import Link from '@mui/material/Link';
// // // import Alert from '@mui/material/Alert';
// // // import MenuItem from '@mui/material/MenuItem';
// // // import Select from '@mui/material/Select';
// // // import FormControl from '@mui/material/FormControl';
// // // import InputLabel from '@mui/material/InputLabel';
// // // import { Logo } from '@/components/logo';

// // // export default function SignUpPage() {
// // //   const router = useRouter();
// // //   const [formData, setFormData] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     email: '',
// // //     password: '',
// // //     nicNumber: '',
// // //     contactNumber: '',
// // //     gender: 'MALE',
// // //     role: 'FARM_MANAGER',
// // //     active: true,
// // //   });
// // //   const [image, setImage] = useState<File | null>(null);
// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   const handleChange = (e: any) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     setLoading(true);

// // //     const formDataObj = new FormData();
// // //     Object.entries(formData).forEach(([key, value]) => {
// // //       formDataObj.append(key, String(value));
// // //     });
// // //     if (image) {
// // //       formDataObj.append('userImage', image);
// // //     }

// // //     try {
// // //       const res = await fetch('http://localhost:8080/api/v1/user/add', {
// // //         method: 'POST',
// // //         body: formDataObj,
// // //       });

// // //       if (!res.ok) {
// // //         const err = await res.text();
// // //         throw new Error(err || 'Registration failed');
// // //       }

// // //       router.push('/auth/jwt/sign-in');
// // //     } catch (err: any) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', py: 4 }}>
// // //       <Container maxWidth="sm">
// // //         <Card elevation={6} sx={{ borderRadius: 3, p: 2 }}>
// // //           <CardContent>
// // //             <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
// // //               <Logo isSingle={false} />
// // //             </Box>
// // //             <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
// // //               Create Account
// // //             </Typography>
// // //             <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 4 }}>
// // //               Join HarvestAIQ and start smart farming
// // //             </Typography>

// // //             {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

// // //             <form onSubmit={handleSubmit}>
// // //               <Box sx={{ display: 'flex', gap: 2 }}>
// // //                 <TextField fullWidth label="First Name" name="firstName" required onChange={handleChange} sx={{ mb: 2 }} />
// // //                 <TextField fullWidth label="Last Name" name="lastName" required onChange={handleChange} sx={{ mb: 2 }} />
// // //               </Box>
// // //               <TextField fullWidth label="Email Address" type="email" name="email" required onChange={handleChange} sx={{ mb: 2 }} />
// // //               <TextField fullWidth label="Password" type="password" name="password" required onChange={handleChange} sx={{ mb: 2 }} />
// // //               <TextField fullWidth label="NIC Number" name="nicNumber" required onChange={handleChange} sx={{ mb: 2 }} />
// // //               <TextField fullWidth label="Contact Number" name="contactNumber" required onChange={handleChange} sx={{ mb: 2 }} />
              
// // //               <FormControl fullWidth sx={{ mb: 2 }}>
// // //                 <InputLabel>Gender</InputLabel>
// // //                 <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
// // //                   <MenuItem value="MALE">Male</MenuItem>
// // //                   <MenuItem value="FEMALE">Female</MenuItem>
// // //                 </Select>
// // //               </FormControl>

// // //               <FormControl fullWidth sx={{ mb: 2 }}>
// // //                 <InputLabel>Role</InputLabel>
// // //                 <Select label="Role" name="role" value={formData.role} onChange={handleChange}>
// // //                   <MenuItem value="ADMIN">Admin</MenuItem>
// // //                   <MenuItem value="FARM_MANAGER">Farm Manager</MenuItem>
// // //                   <MenuItem value="FARM_WORKER">Farm Worker</MenuItem>
// // //                 </Select>
// // //               </FormControl>

// // //               <Button variant="outlined" component="label" fullWidth sx={{ mb: 2, py: 1.5 }}>
// // //                 Upload Profile Image
// // //                 <input type="file" hidden onChange={(e) => setImage(e.target.files?.[0] || null)} />
// // //               </Button>

// // //               <Button type="submit" fullWidth variant="contained" size="large" disabled={loading} sx={{ py: 1.5, borderRadius: 2 }}>
// // //                 {loading ? 'Creating Account...' : 'Sign Up'}
// // //               </Button>
// // //             </form>

// // //             <Box sx={{ mt: 2, textAlign: 'center' }}>
// // //               <Typography variant="body2">
// // //                 Already have an account?{' '}
// // //                 <Link href="/auth/jwt/sign-in" underline="hover">Sign In</Link>
// // //               </Typography>
// // //             </Box>
// // //           </CardContent>
// // //         </Card>
// // //       </Container>
// // //     </Box>
// // //   );
// // // }


// // //up is no desing correct code


// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import Link from '@mui/material/Link';
// // import Alert from '@mui/material/Alert';
// // import Box from '@mui/material/Box';
// // import MenuItem from '@mui/material/MenuItem';
// // import Select from '@mui/material/Select';
// // import FormControl from '@mui/material/FormControl';
// // import InputLabel from '@mui/material/InputLabel';
// // import Grid from '@mui/material/Grid';

// // import AuthCard from '@/components/auth-card';

// // export default function SignUpPage() {
// //   const router = useRouter();
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '',
// //     nicNumber: '',
// //     contactNumber: '',
// //     gender: 'MALE',
// //     role: 'FARM_MANAGER',
// //     active: true,
// //   });
// //   const [image, setImage] = useState<File | null>(null);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e: any) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError('');
// //     setLoading(true);

// //     const formDataObj = new FormData();
// //     Object.entries(formData).forEach(([key, value]) => {
// //       formDataObj.append(key, String(value));
// //     });
// //     if (image) {
// //       formDataObj.append('userImage', image);
// //     }

// //     try {
// //       const res = await fetch('http://localhost:8080/api/v1/user/add', {
// //         method: 'POST',
// //         body: formDataObj,
// //       });

// //       if (!res.ok) {
// //         const err = await res.text();
// //         throw new Error(err || 'Registration failed');
// //       }

// //       router.push('/auth/jwt/sign-in');
// //     } catch (err: any) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <AuthCard
// //       title="Create Account"
// //       subtitle="Join HarvestAIQ and start smart farming"
// //       footer={
// //         <Box>
// //           <Link href="/auth/jwt/sign-in" underline="hover" sx={{ fontWeight: 600 }}>
// //             Already have an account? Sign In
// //           </Link>
// //         </Box>
// //       }
// //     >
// //       {error && <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>{error}</Alert>}

// //       <form onSubmit={handleSubmit}>
// //         <Grid container spacing={2}>
// //           <Grid item xs={6}>
// //             <TextField fullWidth label="First Name" name="firstName" required onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={6}>
// //             <TextField fullWidth label="Last Name" name="lastName" required onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField fullWidth label="Email Address" type="email" name="email" required onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField fullWidth label="Password" type="password" name="password" required onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={6}>
// //             <TextField fullWidth label="NIC Number" name="nicNumber" required onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={6}>
// //             <TextField fullWidth label="Contact Number" name="contactNumber" required onChange={handleChange} />
// //           </Grid>
// //           <Grid item xs={6}>
// //             <FormControl fullWidth>
// //               <InputLabel>Gender</InputLabel>
// //               <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
// //                 <MenuItem value="MALE">Male</MenuItem>
// //                 <MenuItem value="FEMALE">Female</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Grid>
// //           <Grid item xs={6}>
// //             <FormControl fullWidth>
// //               <InputLabel>Role</InputLabel>
// //               <Select label="Role" name="role" value={formData.role} onChange={handleChange}>
// //                 <MenuItem value="ADMIN">Admin</MenuItem>
// //                 <MenuItem value="FARM_MANAGER">Farm Manager</MenuItem>
// //                 <MenuItem value="FARM_WORKER">Farm Worker</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </Grid>
// //           <Grid item xs={12}>
// //             <Button variant="outlined" component="label" fullWidth sx={{ py: 1.5, borderRadius: 2 }}>
// //               Upload Profile Image
// //               <input type="file" hidden onChange={(e) => setImage(e.target.files?.[0] || null)} />
// //             </Button>
// //           </Grid>
// //           <Grid item xs={12}>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               size="large"
// //               disabled={loading}
// //               sx={{ py: 1.5, borderRadius: 3, fontSize: '1rem', boxShadow: 4, mt: 1 }}
// //             >
// //               {loading ? 'Creating Account...' : 'Sign Up'}
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </form>
// //     </AuthCard>
// //   );
// // }



// //// old fix

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   InputAdornment,
//   IconButton,
//   Alert,
//   CircularProgress,
//   MenuItem,
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   SelectChangeEvent,
// } from '@mui/material';
// import {
//   Visibility,
//   VisibilityOff,
//   Person,
//   Email,
//   Lock,
//   Phone,
//   Badge,
//   Wc,
//   CloudUpload,
// } from '@mui/icons-material';

// // Import the shared AuthCard
// import AuthCard from '@/components/auth-card';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   nicNumber: string;
//   contactNumber: string;
//   gender: string;
//   role: string;
//   active: boolean;
//   userImage?: File;
// }

// export default function RegisterPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [fileName, setFileName] = useState('');
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     nicNumber: '',
//     contactNumber: '',
//     gender: '',
//     role: '',
//     active: true,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     setError('');
//     setSuccess('');
//   };

//   const handleSelectChange = (e: SelectChangeEvent) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name as string]: value,
//     }));
//     setError('');
//     setSuccess('');
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setFormData((prev) => ({
//         ...prev,
//         userImage: file,
//       }));
//       setFileName(file.name);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setSuccess('');

//     // try {
//     //   const submitData = new FormData();
//     //   submitData.append('firstName', formData.firstName);
//     //   submitData.append('lastName', formData.lastName);
//     //   submitData.append('email', formData.email);
//     //   submitData.append('password', formData.password);
//     //   submitData.append('nicNumber', formData.nicNumber);
//     //   submitData.append('contactNumber', formData.contactNumber);
//     //   submitData.append('gender', formData.gender);
//     //   submitData.append('role', formData.role);
//     //   submitData.append('active', String(formData.active));

//     //   if (formData.userImage instanceof File) {
//     //     submitData.append('userImage', formData.userImage);
//     //   } else {
//     //     const dummyFile = new File([''], 'default-user.png', { type: 'image/png' });
//     //     submitData.append('userImage', dummyFile);
//     //   }

//     //   const response = await fetch('http://localhost:8080/api/v1/user/add', {
//     //     method: 'POST',
//     //     body: submitData,
//     //   });

//     //   if (!response.ok) {
//     //     const errorText = await response.text();
//     //     throw new Error(errorText || 'Registration failed');
//     //   }

//     //   const userData = await response.json();
//     //   setSuccess('Registration successful! Redirecting to login...');
      
//     //   setTimeout(() => {
//     //     router.push('/auth/jwt/sign-in'); // ✅ Fixed redirect path to match your paths.ts
//     //   }, 2000);
//     // } catch (err: any) {
//     //   if (err.message.includes('already exists')) {
//     //     setError('This email address is already registered. Please use a different email.');
//     //   } else {
//     //     setError(err.message || 'Registration failed. Please try again.');
//     //   }
//     // } finally {
//     //   setLoading(false);
//     // }

//     try {

//       const submitData = new FormData();

//       submitData.append('firstName', formData.firstName);
//       submitData.append('lastName', formData.lastName);
//       submitData.append('email', formData.email);
//       submitData.append('password', formData.password);
//       submitData.append('nicNumber', formData.nicNumber);
//       submitData.append('contactNumber', formData.contactNumber);
//       submitData.append('gender', formData.gender);
//       submitData.append('role', formData.role);
//       submitData.append('active', String(formData.active));

//       if (formData.userImage instanceof File) {
//         submitData.append('userImage', formData.userImage);
//       }

//       const response = await fetch(
//         'http://localhost:8080/api/v1/user/add',
//         {
//           method: 'POST',
//           body: submitData,
//         }
//       );

//       if (!response.ok) {

//         const errorData = await response.json();

//         throw new Error(
//           errorData.message || 'Registration failed'
//         );

//       }

//       const userData = await response.json();

//       setSuccess(
//         userData.message ||
//         'Registration successful! Redirecting to login...'
//       );

//       setTimeout(() => {
//         router.push('/auth/jwt/sign-in');
//       }, 2000);

//     } catch (err: any) {

//       setError(
//         err.message ||
//         'Registration failed. Please try again.'
//       );

//     } finally {

//       setLoading(false);

//     } 
//   };

//   // Footer content for AuthCard
//   const footerContent = (
//     <Box>
//       <Typography variant="body2" color="text.secondary">
//         Already have an account?{' '}
//         <Link
//           href="/auth/jwt/sign-in"
//           style={{
//             color: '#4CAF50',
//             fontWeight: 600,
//             textDecoration: 'none',
//           }}
//         >
//           Sign In
//         </Link>
//       </Typography>
//     </Box>
//   );

//   return (
//     <AuthCard
//       title="Create Account"
//       subtitle="Join HarvestAIQ and start smart farming"
//       footer={footerContent}
//       maxWidth="md" 
//     >
//       <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data">
//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//         )}
//         {success && (
//           <Alert severity="success" sx={{ mb: 2 }}>
//             {success}
//           </Alert>
//         )}

//         <Grid container spacing={2}>
//           {/* First Name */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               size="small"
//               label="First Name *"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Person color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Last Name */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Last Name *"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Person color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Email Address *"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Email color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* NIC and Contact */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               size="small"
//               label="NIC Number *"
//               name="nicNumber"
//               value={formData.nicNumber}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Badge color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Contact Number *"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Phone color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Gender and Role */}
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth size="small">
//               <InputLabel>Gender *</InputLabel>
//               <Select
//                 label="Gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleSelectChange}
//                 required
//                 disabled={loading}
//                 displayEmpty
//                 renderValue={(selected) => {
//                   if (selected.length === 0) {
//                     return <span style={{ color: '#888' }}>Select Gender</span>; 
//                   }
//                   return selected;
//                 }}
//                 startAdornment={
//                   <InputAdornment position="start">
//                     <Wc color="action" />
//                   </InputAdornment>
//                 }
//               >
//                 <MenuItem value="MALE">Male</MenuItem>
//                 <MenuItem value="FEMALE">Female</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           {/* <Grid item xs={12} sm={6}>
//             <FormControl fullWidth size="small">
//               <InputLabel>Role</InputLabel>
//               <Select
//                 label="Role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleSelectChange}
//                 disabled={loading}
//                 displayEmpty 
//                 renderValue={(selected) => {
//                   if (selected.length === 0) {
//                     return <span style={{ color: '#888' }}>Select Role</span>;
//                   }
//                   return selected;
//                 }}
//               >
//                 <MenuItem value="ADMIN">Admin</MenuItem>
//                 <MenuItem value="FARM_MANAGER">Farm Manager</MenuItem>
//                 <MenuItem value="FARM_WORKER">Farm Worker</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid> */}

//           {/* Role - Select with Placeholder */}
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth size="small">
//               <InputLabel>Role</InputLabel>
//               <Select
//                 label="Role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleSelectChange}
//                 required
//                 disabled={loading}
//                 displayEmpty
//                 renderValue={(selected) => {
//                   if (selected.length === 0) {
//                     // return <Typography variant="body2" color="text.secondary">Select Role</Typography>;
//                   return <span style={{ color: '#888' }}>Select Role</span>;
//                   }
//                   return selected;
//                 }}
//                 startAdornment={
//                   <InputAdornment position="start">
//                     <Wc color="action" />
//                   </InputAdornment>
//                 }
//               >
//                 <MenuItem value="ADMIN">Admin</MenuItem>
//                 <MenuItem value="FARM_MANAGER">Farm Manager</MenuItem>
//                 <MenuItem value="FARM_WORKER">Farm Worker</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           {/* Profile Image */}
//           <Grid item xs={12}>
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<CloudUpload />}
//               disabled={loading}
//               sx={{
//                 width: '100%',
//                 py: 1,
//                 borderColor: '#E0E0E0',
//                 color: 'text.secondary',
//                 '&:hover': {
//                   borderColor: '#4CAF50',
//                   color: '#4CAF50',
//                 },
//               }}
//             >
//               {fileName ? fileName : 'Choose Profile Image'}
//               <input
//                 type="file"
//                 name="userImage"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 hidden
//               />
//             </Button>
//             <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
//               Upload a profile image (optional) - JPG, PNG, GIF
//             </Typography>
//           </Grid>

//           {/* Password */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Password *"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               value={formData.password}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock color="action" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               helperText="Minimum 6 characters"
//             />
//           </Grid>

//           {/* Confirm Password */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Confirm Password *"
//               name="confirmPassword"
//               type={showConfirmPassword ? 'text' : 'password'}
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock color="action" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
//                       {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 mt: 1,
//                 py: 1.5,
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 textTransform: 'none',
//                 background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
//                 },
//                 '&:disabled': {
//                   background: '#A5D6A7',
//                 },
//               }}
//             >
//               {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
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
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
  Phone,
  Badge,
  Wc,
  CloudUpload,
} from '@mui/icons-material';

// Import the shared AuthCard
import AuthCard from '@/components/auth-card';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  nicNumber: string;
  contactNumber: string;
  gender: string;
  role: string;
  active: boolean;
  userImage?: File;
}

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    nicNumber: '',
    contactNumber: '',
    gender: '',
    role: '',
    active: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
    setSuccess('');
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
    setError('');
    setSuccess('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        userImage: file,
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('password', formData.password);
      submitData.append('nicNumber', formData.nicNumber);
      submitData.append('contactNumber', formData.contactNumber);
      submitData.append('gender', formData.gender);
      submitData.append('role', formData.role);
      submitData.append('active', String(formData.active));

      if (formData.userImage instanceof File) {
        submitData.append('userImage', formData.userImage);
      } else {
        const dummyFile = new File([''], 'default-user.png', { type: 'image/png' });
        submitData.append('userImage', dummyFile);
      }

      const response = await fetch('http://localhost:8080/api/v1/user/add', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        let errorMessage = 'Registration failed. Please try again.';
        try {
          const errorData = await response.json();
          if (errorData && errorData.message) {
            errorMessage = errorData.message; // Backend එකෙන් එන ඔරිජිනල් පණිවිඩය (Email, NIC, Contact)
          }
        } catch (e) {
          const errorText = await response.text();
          if (errorText) {
            errorMessage = errorText;
          }
        }
        throw new Error(errorMessage);
      }

      const userData = await response.json();
      setSuccess('Registration successful! Redirecting to login...');
      
      setTimeout(() => {
        router.push('/auth/jwt/sign-in');
      }, 2000);
    } catch (err: any) {
      // Backend එකෙන් එන message එක කෙලින්ම පෙන්වයි
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Footer content for AuthCard
  const footerContent = (
    <Box>
      <Typography variant="body2" color="text.secondary">
        Already have an account?{' '}
        <Link
          href="/auth/jwt/sign-in"
          style={{
            color: '#4CAF50',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Sign In
        </Link>
      </Typography>
    </Box>
  );

  return (
    <AuthCard
      title="Create Account"
      subtitle="Join HarvestAIQ and start smart farming"
      footer={footerContent}
      maxWidth="md" 
    >
      <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data">
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

        <Grid container spacing={2}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="First Name *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Last Name *"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Email Address *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* NIC and Contact */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="NIC Number *"
              name="nicNumber"
              value={formData.nicNumber}
              onChange={handleChange}
              required
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Badge color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Contact Number *"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Gender and Role */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Gender **</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleSelectChange}
                required
                disabled={loading}
                displayEmpty
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span style={{ color: '#888' }}>Select Gender</span>; 
                  }
                  return selected;
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Wc color="action" />
                  </InputAdornment>
                }
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Role **</InputLabel>
              <Select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleSelectChange}
                required
                disabled={loading}
                displayEmpty
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span style={{ color: '#888' }}>Select Role</span>;
                  }
                  return selected;
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Wc color="action" />
                  </InputAdornment>
                }
              >
                <MenuItem value="ADMIN">Admin</MenuItem>
                <MenuItem value="FARM_MANAGER">Farm Manager</MenuItem>
                <MenuItem value="FARM_WORKER">Farm Worker</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Profile Image */}
          <Grid item xs={12}>
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
              disabled={loading}
              sx={{
                width: '100%',
                py: 1,
                borderColor: '#E0E0E0',
                color: 'text.secondary',
                '&:hover': {
                  borderColor: '#4CAF50',
                  color: '#4CAF50',
                },
              }}
            >
              {fileName ? fileName : 'Choose Profile Image'}
              <input
                type="file"
                name="userImage"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
            </Button>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
              Upload a profile image (optional) - JPG, PNG, GIF
            </Typography>
          </Grid>

          {/* Password */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Password *"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
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
              helperText="Minimum 6 characters"
            />
          </Grid>

          {/* Confirm Password */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="Confirm Password *"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                mt: 1,
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
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </AuthCard>
  );
}