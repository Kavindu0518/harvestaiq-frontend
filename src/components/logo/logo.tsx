// 'use client';

// import type { LinkProps } from '@mui/material/Link';
// import Link from '@mui/material/Link';
// import { styled } from '@mui/material/styles';
// import { CONFIG } from '@/global-config';

// export type LogoProps = LinkProps & {
//   isSingle?: boolean;
//   disabled?: boolean;
// };

// export function Logo({ sx, disabled, href = '/', isSingle = true, ...other }: LogoProps) {
//   const singleLogo = (
//     <img
//       alt="HarvestAIQ Logo"
//       src={${CONFIG.assetsDir}/logo/logo-icon.svg}
//       width="100%"
//       height="100%"
//     />
//   );

//   const fullLogo = (
//     <img
//       alt="HarvestAIQ"
//       src={${CONFIG.assetsDir}/logo/logo-full.svg}
//       width="100%"
//       height="100%"
//     />
//   );

//   return (
//     <LogoRoot
//       href={href}
//       underline="none"
//       sx={[
//         {
//           width: 40,
//           height: 40,
//           ...(!isSingle && { width: 120, height: 36 }),
//           ...(disabled && { pointerEvents: 'none' }),
//         },
//         ...(Array.isArray(sx) ? sx : [sx]),
//       ]}
//       {...other}
//     >
//       {isSingle ? singleLogo : fullLogo}
//     </LogoRoot>
//   );
// }

// const LogoRoot = styled(Link)({
//   flexShrink: 0,
//   color: 'transparent',
//   display: 'inline-flex',
//   verticalAlign: 'middle',
// });



'use client';

import type { LinkProps } from '@mui/material/Link';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { CONFIG } from '@/global-config';

export type LogoProps = LinkProps & {
  isSingle?: boolean;
  disabled?: boolean;
};

export function Logo({ sx, disabled, href = '/', isSingle = true, ...other }: LogoProps) {
  const singleLogo = (
    <img
      alt="HarvestAIQ Logo"
      src={`${CONFIG.assetsDir}/logo/logo-icon.svg`}
      width="100%"
      height="100%"
    />
  );

  const fullLogo = (
    <img
      alt="HarvestAIQ"
      src={`${CONFIG.assetsDir}/logo/logo-full.svg`}
      width="100%"
      height="100%"
    />
  );

  return (
    <LogoRoot
      href={href}
      underline="none"
      sx={[
        {
          width: 40,
          height: 40,
          ...(!isSingle && { width: 120, height: 36 }),
          ...(disabled && { pointerEvents: 'none' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
}

const LogoRoot = styled(Link)({
  flexShrink: 0,
  color: 'transparent',
  display: 'inline-flex',
  verticalAlign: 'middle',
});