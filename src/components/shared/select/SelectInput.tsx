import { ChevronDownIcon } from '@components';
import { MAIN_THEME_DATA } from '@configs';
import { opacityHex } from '@theme';
import { Select } from 'antd';
import { CSSProperties, ReactNode, useState } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import styled, { css } from 'styled-components';
interface IPropsSelectInput {
  data: Array<{ value: number | string; label: string; disabled?: boolean }>;
  className?: string;
  popupClassName?: string;
  containerClassName?: string;
  style?: CSSProperties;
  mode?: 'multiple' | 'tags';
  value?: string | number;
  defaultValue?: string | number | string[] | number[];
  placeholder?: string;
  noBorder?: boolean;
  suffixIcon?: ReactNode;
  label?: string;
  readOnly?: boolean;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  required?: boolean;
  showSearch?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  register?: UseFormRegister<FieldValues>;
  name?: string;
  setValue?: UseFormSetValue<FieldValues>;
  disabled?: boolean;
}
export const ShareSelectInput = (props: IPropsSelectInput) => {
  const {
    data,
    className,
    style,
    mode,
    value,
    defaultValue,
    placeholder,
    noBorder,
    label,
    readOnly,
    required,
    suffixIcon,
    showSearch,
    onBlur,
    onFocus,
    onChange,
    name,
    setValue,
    popupClassName,
    containerClassName,
    errors,
    disabled,
  } = props;
  const { Option } = Select;
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const onChangeValue = (input: string) => {
    if (!setValue) {
      onChange?.(input);
    } else if (name) {
      setValue?.(name, input);
    }
  };
  // useEffect(() => {
  //   if (name && value) {
  //     setValue?.(name, value);
  //   }
  // }, []);
  return (
    <StyledSelectInputContainer className={containerClassName}>
      {label && (
        <StyledLabel className="app-select__label">
          <label className="label">
            {label}
            {required && <span className="required"> *</span>}:
          </label>
        </StyledLabel>
      )}
      <StyledSelectInput
        popupClassName={popupClassName}
        showSearch={showSearch}
        suffixIcon={suffixIcon || <ChevronDownIcon className="select-down__icon" />}
        className={className}
        optionFilterProp="label"
        onChange={onChangeValue}
        style={style}
        mode={mode}
        defaultValue={defaultValue || undefined}
        value={value}
        placeholder={placeholder}
        onDropdownVisibleChange={(open: boolean) => {
          setIsDropdownShow(open);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readOnly}
        $no_border={noBorder}
        $defaultSelectIcon={!suffixIcon}
        $isDropdownShow={!!isDropdownShow}
        options={data}
        disabled={disabled}
        $disabled={disabled}
      >
        {data.map((item, index) => {
          return (
            <Option key={index} value={item.value}>
              {item.label}
            </Option>
          );
        })}
      </StyledSelectInput>
      {errors && <p className="input-text-error">{errors}</p>}
    </StyledSelectInputContainer>
  );
};

export const StyledSelectInputContainer = styled.div<{
  disabled?: boolean;
}>``;

const StyledSelectInput = styled((props) => {
  return <Select {...props} />;
})<{
  $defaultSelectIcon?: boolean;
  $isDropdownShow?: boolean;
  $no_border?: boolean;
}>`
  width: 100%;
  border-radius: 1rem;
  height: fit-content;
  /* min-width: 15rem; */
  ${(p) =>
    p.$no_border &&
    css`
      border: none;
    `}

  .ant-select-selector {
    padding: 0.4rem 1.4rem !important;
    /* height: initial !important; */
  }
  .ant-select-selection-search-input {
    color: ${(p) => p.theme.colors.textColor};
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
  .ant-select-selection-item {
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.9rem;
    align-items: center;
    display: flex;
  }
  .ant-select-selection-search {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-select-selector {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
    color: #495057;
    border-color: #e2e8f0 !important;
    border-radius: 0.6rem !important;
    transition: outline 0.1s !important;
    &:focus,
    &:focus-within,
    &:focus-visible {
      box-shadow: none !important;
      border-color: #e2e8f0 !important;
      outline: 4px solid ${MAIN_THEME_DATA.mainColor + opacityHex[20]}!important;
    }
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: transparent !important;
    border: 0 !important;
  }

  .ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: transparent !important;
    border: 0 !important;
  }

  .ant-select-arrow {
    color: ${(p) => p.theme.colors.colorHeader} !important;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }
  .ant-select-selection-item {
    font-weight: 400 !important;
  }
  .ant-select-selection-item,
  .ant-select-selection-placeholder {
    font-size: 1.3rem !important;
  }

  .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
  }

  .suffix-icon {
    margin-top: -0.5rem;
    transform: rotate(-180deg);
  }
  .ant-select-arrow {
    .select-down__icon {
      transition: 0.35s;
      ${(p) =>
        p.$isDropdownShow &&
        css`
          transform: rotate(180deg);
        `}
    }
  }
`;

const StyledLabel = styled.div`
  .label {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 20px;
    text-align: center;
    color: #303030;
    .required {
      color: #d42a1c;
      font-weight: bold;
    }
  }
`;
