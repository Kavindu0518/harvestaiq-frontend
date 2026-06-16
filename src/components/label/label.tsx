import type { LabelProps } from './types';
import { upperFirst } from 'es-toolkit';
import { LabelRoot, LabelIcon } from './styles';

export function Label({
  sx,
  endIcon,
  children,
  startIcon,
  className,
  disabled,
  variant = 'soft',
  color = 'default',
  ...other
}: LabelProps) {
  return (
    <LabelRoot
      color={color}
      variant={variant}
      disabled={disabled}
      sx={sx}
      {...other}
    >
      {startIcon && <LabelIcon>{startIcon}</LabelIcon>}
      {typeof children === 'string' ? upperFirst(children) : children}
      {endIcon && <LabelIcon>{endIcon}</LabelIcon>}
    </LabelRoot>
  );
}
