import styled from 'styled-components';

import { APP_COLORS } from '@theme';

export const OptionDropdown = styled.div`
  width: 250px;
  position: relative;
  padding: 12px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
  .ant-divider-horizontal {
    margin: 16px 0;
  }
  .label {
    margin: 0 16px 3px;
    padding: 4px 8px;
    color: #a1a5b7;
    text-transform: uppercase;
    font-size: 1.23rem;
    font-weight: 500;
  }
  .option-item {
    cursor: pointer;
    margin: 2px 8px;
    padding: 8px 16px;
    border-radius: 4px;
    color: ${APP_COLORS.gray800};
    font-weight: 500;
    &.dangerous {
      color: ${APP_COLORS.textDanger};
    }
    &:hover {
      background-color: ${APP_COLORS.primaryLight};
      color: ${APP_COLORS.primary};
    }
  }
`;
