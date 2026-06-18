// // 'use client';

// // import { ReactNode } from 'react';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { useTheme } from '@mui/material/styles';
// // // import { Logo } from '@/components/logo';
// // import { TextLogo } from '@/components/text-logo';
// // import { motion } from 'framer-motion';

// // interface AuthCardProps {
// //   title: string;
// //   subtitle: string;
// //   children: ReactNode;
// //   footer: ReactNode;
// // }

// // export default function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
// //   const theme = useTheme();

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         background: `linear-gradient(135deg, ${theme.palette.primary.light} 30%, ${theme.palette.background.default} 100%)`,
// //         position: 'relative',
// //         overflow: 'hidden',
// //       }}
// //     >
// //       {/* Background Animated Blobs */}
// //       <Box
// //         component={motion.div}
// //         animate={{
// //           scale: [1, 1.2, 1],
// //           rotate: [0, 45, 0],
// //         }}
// //         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// //         sx={{
// //           position: 'absolute',
// //           top: '-10%',
// //           right: '-10%',
// //           width: '50%',
// //           height: '50%',
// //           borderRadius: '50%',
// //           bgcolor: 'secondary.main',
// //           opacity: 0.1,
// //           filter: 'blur(100px)',
// //           zIndex: 0,
// //         }}
// //       />
// //       <Box
// //         component={motion.div}
// //         animate={{
// //           scale: [1.2, 1, 1.2],
// //           rotate: [45, 0, 45],
// //         }}
// //         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
// //         sx={{
// //           position: 'absolute',
// //           bottom: '-10%',
// //           left: '-10%',
// //           width: '50%',
// //           height: '50%',
// //           borderRadius: '50%',
// //           bgcolor: 'primary.main',
// //           opacity: 0.1,
// //           filter: 'blur(100px)',
// //           zIndex: 0,
// //         }}
// //       />

// //       <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <Card
// //             elevation={10}
// //             sx={{
// //               borderRadius: 4,
// //               backdropFilter: 'blur(10px)',
// //               bgcolor: 'rgba(255, 255, 255, 0.85)',
// //               border: `1px solid rgba(255, 255, 255, 0.3)`,
// //               overflow: 'hidden',
// //             }}
// //           >
// //             <CardContent sx={{ p: 4 }}>
// //               {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
// //                 <Logo isSingle={false} />
// //               </Box> */}
// //               <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
// //                 <TextLogo />
// //               </Box>
// //               <Typography variant="h4" align="center" fontWeight={700} color="text.primary" gutterBottom>
// //                 {title}
// //               </Typography>
// //               <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
// //                 {subtitle}
// //               </Typography>
              
// //               {/* Form / Content goes here */}
// //               {children}

// //               <Box sx={{ mt: 3, textAlign: 'center' }}>
// //                 {footer}
// //               </Box>
// //             </CardContent>
// //           </Card>
// //         </motion.div>
// //       </Container>
// //     </Box>
// //   );
// // }



// 'use client';

// import { ReactNode } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { useTheme } from '@mui/material/styles';
// import { TextLogo } from '@/components/text-logo';
// import { motion } from 'framer-motion';

// interface AuthCardProps {
//   title: string;
//   subtitle: string;
//   children: ReactNode;
//   footer: ReactNode;
// }

// export default function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: `linear-gradient(135deg, ${theme.palette.primary.light} 30%, ${theme.palette.background.default} 100%)`,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Animated Blobs */}
//       <Box
//         component={motion.div}
//         animate={{
//           scale: [1, 1.2, 1],
//           rotate: [0, 45, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         sx={{
//           position: 'absolute',
//           top: '-10%',
//           right: '-10%',
//           width: '50%',
//           height: '50%',
//           borderRadius: '50%',
//           bgcolor: 'secondary.main',
//           opacity: 0.1,
//           filter: 'blur(100px)',
//           zIndex: 0,
//         }}
//       />
//       <Box
//         component={motion.div}
//         animate={{
//           scale: [1.2, 1, 1.2],
//           rotate: [45, 0, 45],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//         sx={{
//           position: 'absolute',
//           bottom: '-10%',
//           left: '-10%',
//           width: '50%',
//           height: '50%',
//           borderRadius: '50%',
//           bgcolor: 'primary.main',
//           opacity: 0.1,
//           filter: 'blur(100px)',
//           zIndex: 0,
//         }}
//       />

//       {/* 👇 මෙතන maxWidth="md" දාලා තියෙනවා */}
//       <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Card
//             elevation={10}
//             sx={{
//               borderRadius: 4,
//               backdropFilter: 'blur(10px)',
//               bgcolor: 'rgba(255, 255, 255, 0.85)',
//               border: `1px solid rgba(255, 255, 255, 0.3)`,
//               overflow: 'hidden',
//             }}
//           >
//             <CardContent sx={{ p: 4 }}>
//               <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
//                 <TextLogo />
//               </Box>
//               <Typography variant="h4" align="center" fontWeight={700} color="text.primary" gutterBottom>
//                 {title}
//               </Typography>
//               <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
//                 {subtitle}
//               </Typography>
              
//               {/* Form / Content goes here */}
//               {children}

//               <Box sx={{ mt: 3, textAlign: 'center' }}>
//                 {footer}
//               </Box>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// }



'use client';

import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { TextLogo } from '@/components/text-logo';
import { motion } from 'framer-motion';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';  // 👈 මේ පේළිය එකතු කරන්න
}

export default function AuthCard({ 
  title, 
  subtitle, 
  children, 
  footer, 
  maxWidth = 'sm' // 👈 Default එක sm (පටු) විදියට තියන්න
}: AuthCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 30%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Animated Blobs */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          bgcolor: 'secondary.main',
          opacity: 0.1,
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [45, 0, 45],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          bgcolor: 'primary.main',
          opacity: 0.1,
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      {/* 👇 මෙතන maxWidth වෙනුවට {maxWidth} දාන්න */}
      <Container maxWidth={maxWidth} sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card
            elevation={10}
            sx={{
              borderRadius: 4,
              backdropFilter: 'blur(10px)',
              bgcolor: 'rgba(255, 255, 255, 0.85)',
              border: `1px solid rgba(255, 255, 255, 0.3)`,
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <TextLogo />
              </Box>
              <Typography variant="h4" align="center" fontWeight={700} color="text.primary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                {subtitle}
              </Typography>
              
              {children}

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                {footer}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}