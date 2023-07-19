import { APP_COLORS } from '@theme';
import styled, { css } from 'styled-components';

export const TableText = styled.span<{
  $strong?: boolean;
}>`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0;
  color: ${APP_COLORS.gray600};
  ${({ $strong }) =>
    $strong &&
    css`
      font-weight: 700;
    `}
`;
