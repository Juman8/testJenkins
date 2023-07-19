import { enumThemeMode } from '@configs';
import { APP_COLORS } from '@theme';
import styled, { css } from 'styled-components';

export const StyledSection = styled.div`
  width: 100%;
  background: ${(p) => p?.theme?.colors?.bgSection};
  padding: 20px 24px;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
`;

export const StyedSubPage = styled.div`
  .page__head {
    margin-bottom: 2rem;
    .title {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  .page__section {
    position: relative;
    padding: 2rem 2.8rem;
    border-radius: 0.6rem;
    background: ${(p) => p.theme.colors.bgSection};
    box-shadow: 0px 3px 20px #0000000b;
  }
`;

export const AppSection = styled.div`
  background: ${(p) => p?.theme?.colors?.bgSection};
  padding: 39px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1), 0 11px 6px -7px rgba(43, 43, 43, 0.1);
  margin-top: 2.3rem;
`;

export const DetailActions = styled.div`
  margin: 2.3rem 0 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const StyledListSection = styled.div`
  .head__actions {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: space-between;
    .search__box {
      min-width: 20rem;
      width: fit-content;
      .search__input {
        height: 4.5rem;
      }
    }
    .create-button {
      height: 4.5rem;
      width: fit-content;
    }
  }
  .table-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledBottomPagination = styled.div`
  margin-top: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .page-size {
    display: flex;
    align-items: center;
    .label {
      display: inline-block;
      white-space: nowrap;
      padding-right: 0.8rem;
    }
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  .user-avatar {
    margin-right: 8px;
    color: '#fff';
  }
  .name {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
    color: ${APP_COLORS.gray800};
  }

  .email {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0;
    color: ${APP_COLORS.gray500};
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const Text = styled.p<{
  $color?: string;
  $fontSize?: number;
  $fontWeight?: number;
}>`
  margin: 0;
  ${(p) =>
    p?.$color &&
    css`
      color: ${p.$color};
    `}
  ${(p) =>
    p?.$fontSize &&
    css`
      font-size: ${p.$fontSize / 10 + 'rem'};
    `}
  ${(p) =>
    p?.$fontWeight &&
    css`
      font-weight: ${p.$fontWeight};
    `}
`;

export const FilterDropdown = styled.div<{
  $themeMode?: string;
  $appTheme?: string;
}>`
  min-width: 32.5rem;
  width: 100%;
  height: 100%;
  background: ${(p) =>
    p?.$themeMode === enumThemeMode.DARK ? p.$appTheme : p?.theme.colors?.header?.background};
  color: ${(p: any) => p?.theme.colors?.header?.text};
  box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
  .dropdown-title {
    padding: 1.625rem 2.2rem;
    font-size: 1.9rem;
    font-weight: 600;
  }
  .dropdown-content {
    padding: 1.625rem 2.2rem 1.8rem;
    .filter-option {
      margin-bottom: 2.6rem;
      label {
        font-size: 1.5rem;
        font-weight: 500;
        color: #78798d;
      }
    }
    .input__label {
      font-size: 1.5rem;
      font-weight: 500;
      color: #78798d;
    }
  }
  .dropdown-actions {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 2.2rem 1.8rem;
    .btn {
      padding: 1.1rem 2rem;
      &:last-child {
        margin-right: 0.8rem;
      }
    }
    .cancel-filter-button {
      &:hover {
        .text-btn {
          color: ${APP_COLORS.primary};
        }
      }
    }
  }
  .ant-divider {
    margin: 0;
  }
`;

export const FlexActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  .btn {
    padding: 0.69rem 1.5rem;
    /* &:last-child {
      margin-left: 0.8rem;
    } */
  }
  .cancel-button {
    &:hover {
      .text-btn {
        color: ${APP_COLORS.primary};
      }
    }
  }
`;

export const ImageBox = styled.div<{
  $size?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  .image-contain {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  ${({ $size }) =>
    $size &&
    css`
      width: ${`${$size}px`};
      height: ${`${$size}px`};
    `}
`;

export const UploadImageWrapper = styled.div`
  .label {
    color: #303030;
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .desc-upload {
    margin-top: 1.2rem;
    color: ${APP_COLORS.teal400};
    font-style: italic;
  }
`;

export const StyledCustomerCategories = styled.div<{
  $smallBox?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${({ $smallBox }) =>
    $smallBox &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .app-tag {
        font-size: 1.1rem;
      }
    `};
`;

export const FlexWrap = styled.div<{
  $gap?: number | string;
  $height?: number | string;
  $align?: string;
  $justifyContent?: string;
}>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  ${({ $gap }) =>
    $gap &&
    (typeof $gap === 'number'
      ? css`
          gap: ${$gap}px;
        `
      : css`
          gap: ${$gap};
        `)}
  ${({ $height }) =>
    $height &&
    (typeof $height === 'number'
      ? css`
          height: ${$height}px;
        `
      : css`
          height: ${$height};
        `)};
  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `};
  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}
`;

export const DashboardSection = styled.div<{
  $flex?: number;
  $tableSection?: boolean;
}>`
  width: 100%;
  height: 100%;
  min-width: 250px;
  background: ${(p) => p?.theme?.colors?.bgSection};
  padding: 2.5rem 2.9rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1), 0 11px 6px -7px rgba(43, 43, 43, 0.1);
  margin-top: 2.3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-flow: column;
  .head {
    margin-bottom: 2.8rem;
    flex: 0 1 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ${({ $tableSection }) =>
      $tableSection &&
      css`
        margin-bottom: 1.3rem;
      `}
  }
  .db-sec__content {
    flex: 1 1 auto;
  }
  .db-sec__loading {
    flex: 1 1 auto;
  }
  .title {
    color: ${APP_COLORS.teal600};
    font-size: 1.8rem;
    font-weight: 500;
  }
  .desc {
    margin-top: 1.2rem;
    color: ${APP_COLORS.gray500};
    font-size: 1.4rem;
    font-weight: 400;
  }
  .chart-filter {
    .ant-select-selector {
      height: 3.5rem !important;
      padding: 0 1.1rem !important;
      .ant-select-selection-item {
        font-size: 1.3rem !important;
        font-weight: 400 !important;
      }
    }
  }
  .item-select {
    svg {
      margin-right: -12px;
    }
  }
  ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}
`;

export const DashboardGroupSection = styled.div<{
  $height?: number | string;
  $align?: string;
  $justifyContent?: string;
  $flex?: number;
}>`
  width: 100%;
  height: 100%;
  background: ${(p) => p?.theme?.colors?.bgSection};
  padding: 0 2.9rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1), 0 11px 6px -7px rgba(43, 43, 43, 0.1);
  margin-top: 2.3rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  .db-group-divider {
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    margin: 0 25px;
  }
  ${({ $height }) =>
    $height &&
    (typeof $height === 'number'
      ? css`
          height: ${$height}px;
        `
      : css`
          height: ${$height};
        `)};
  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `};
  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}
  ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}
`;

export const DashboardGroupContent = styled.div<{
  $flex?: number;
}>`
  padding: 2.5rem 0;
  width: 100%;
  height: 100%;
  background: ${(p) => p?.theme?.colors?.bgSection};
  display: flex;
  flex-flow: column;
  .head {
    margin-bottom: 2.8rem;
    flex: 0 1 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .db-sec__content {
    flex: 1 1 auto;
  }
  .db-sec__loading {
    flex: 1 1 auto;
  }
  .title {
    color: ${APP_COLORS.teal600};
    font-size: 1.8rem;
    font-weight: 500;
    span {
      font-weight: 600;
      color: ${APP_COLORS.blue400};
    }
  }
  .desc {
    margin-top: 1.2rem;
    color: ${APP_COLORS.gray500};
    font-size: 1.4rem;
    font-weight: 400;
  }
  .chart-filter {
    .ant-select-selector {
      height: 3.5rem !important;
      padding: 0 1.1rem !important;
      .ant-select-selection-item {
        font-size: 1.3rem !important;
        font-weight: 400 !important;
      }
    }
  }
  .item-select {
    svg {
      margin-right: -12px;
    }
  }
  ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}
`;

export const FormLabel = styled.div<{
  $smallBox?: boolean;
}>`
  font-weight: 500;
  font-size: 1.5rem;
  display: inline-block;
  margin-bottom: 0.8rem;
  color: inherit;
  font-style: normal;
  line-height: 20px;
  text-align: center;
  color: #303030;
  .required {
    color: #d42a1c;
    font-weight: bold;
  }
`;

export const DetailsItem = styled.div<{
  $smallBox?: boolean;
}>`
  .label {
    font-weight: 500;
    font-size: 1.5rem;
    display: inline-block;
    margin-bottom: 0.8rem;
    color: inherit;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    color: #303030;
  }
  .content {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const SelectInfo = styled.div`
  cursor: pointer;
`;
