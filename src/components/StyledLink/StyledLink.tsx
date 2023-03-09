import React, { FC, memo } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import { cx } from '../../utils';
import './styles.css';

interface SharedLinkProps extends LinkProps {
  className: string;
}

const StyledLink: FC<SharedLinkProps> = ({ to, children, className }) => (
  <Link to={to} className={cx('shared-link', className)}>
    {children}
  </Link>
);

export default memo(StyledLink);
