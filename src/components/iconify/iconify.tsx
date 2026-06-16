'use client';

import type { IconProps } from '@iconify/react';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';

import { iconifyClasses } from './classes';

export type IconifyProps = Omit<IconProps, 'icon'> & {
  icon: string;
  width?: number;
};

export function Iconify({ icon, width = 20, sx, ...other }: IconifyProps) {
  return (
    <IconRoot
      icon={icon}
      className={iconifyClasses.root}
      sx={[
        {
          width,
          height: width,
          display: 'inline-flex',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

const IconRoot = styled(Icon)`;
