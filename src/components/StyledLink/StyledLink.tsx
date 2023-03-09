import React, { FC, memo } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { cx } from '../../utils';
import './styles.css';

interface SharedLinkProps extends LinkProps {
  className: string;
}

const StyledLink: FC<SharedLinkProps> = ({ to, children, className }) => (
  <RouterLink to={to} className={cx('shared-link', className)}>
    {children}
  </RouterLink>
);

export default memo(StyledLink);
