import React, { ReactNode } from 'react';
import { Tag } from 'antd';
import styled, { css } from 'styled-components';

import { enumStatus } from '@configs';
import { APP_COLORS } from '@theme';

interface IProps {
  status?: enumStatus;
  label?: string;
  textColor?: string;
  backgroundColor?: string;
  prefixIcon?: ReactNode;
  isInListTag?: boolean;
  className?: string;
}

export const StatusTag: React.FC<IProps> = (props) => {
  const { status, label, backgroundColor, textColor, prefixIcon, isInListTag, className } = props;
  const tagColor =
    status === enumStatus.ACTIVE
      ? APP_COLORS.blue300
      : status === enumStatus.INACTIVE
      ? APP_COLORS.red300
      : backgroundColor;
  return (
    <StyledStatusTag
      className={className ? `app-status-tag ${className}` : 'app-status-tag'}
      color={tagColor}
      $isInListTag={isInListTag}
      $textColor={textColor}
    >
      {prefixIcon && <div className="pre-icon">{prefixIcon}</div>}
      {label || (status === enumStatus.ACTIVE ? 'Active' : 'Not active')}
    </StyledStatusTag>
  );
};

const StyledStatusTag = styled((props) => <Tag {...props} />)<{
  $isInListTag?: boolean;
  $textColor?: string;
}>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  .pre-icon {
    margin-right: 0.5rem;
  }
  ${({ $isInListTag }) =>
    $isInListTag
      ? css`
          margin: 0 8px 0 0;
        `
      : css`
          margin: 0;
        `}
  ${({ $textColor }) =>
    $textColor &&
    css`
      color: ${$textColor};
    `}
`;
