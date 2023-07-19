import { enumThemeMode } from '@configs';
import { APP_COLORS } from '@theme';
import styled, { css } from 'styled-components';

export const StyledSelectConfirm = styled.div`
  width: 100%;
  background: ${(p) => p?.theme?.colors?.bgSection};
  padding: 20px 24px;
`;
