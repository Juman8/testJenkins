import { memo, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'antd';

import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';

interface IProps {
  defaultValue?: any;
  label?: string;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  disabled?: boolean;
  status?: 'error' | 'warning';
  popupClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  allowClear?: boolean;
  bordered?: boolean;
  open?: boolean;
  nextIcon?: ReactNode;
  prevIcon?: ReactNode;
  suffixIcon?: ReactNode;
  inputReadOnly?: boolean;
  placeholder?: string;
  required?: boolean;
  noBorderStyle?: boolean;
  value?: any;
  name?: string;
  rows?: number;
  cols?: number;
  register?: UseFormRegister<any>;
  onChange?: (e: any) => void;
}

export const ShareAreaInput = memo((props: IProps) => {
  const {
    label,
    errors,
    containerClassName,
    inputClassName,
    name,
    placeholder,
    required,
    noBorderStyle,
    rows,
    cols,
    register,
    onChange,
  } = props;

  return (
    <Wrapper className={containerClassName} $noBorderStyle={noBorderStyle}>
      {label && (
        <label className="input__label" htmlFor={label}>
          {label}
          {required && <span className="required"> *</span>}:
        </label>
      )}
      <textarea
        className={inputClassName ? `app-area-input ${inputClassName}` : 'app-area-input'}
        placeholder={placeholder}
        id={name}
        name={name}
        rows={rows}
        cols={cols}
        onChange={onChange}
        {...(register && name && register(name))}
      />
      {!!errors && <p className="input-text-error">{errors}</p>}
    </Wrapper>
  );
});

const Wrapper = styled.div<{
  $noBorderStyle?: boolean;
}>`
  .input__label {
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
    ${(p) =>
      p?.$noBorderStyle &&
      css`
        color: #303030;
        font-weight: 500;
        font-size: 1.5rem;
      `}
  }
  .input-text-error {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: red;
    font-size: 1.2rem;
    position: relative;
    @media (max-width: 640px) {
      font-size: 1.1rem;
    }
  }
  .app-area-input {
    width: 100%;
    border: 1px solid ${(p) => p?.theme?.colors?.input?.border ?? '#b6b6b6'};
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
    border-radius: 0.6rem;
    color: #495057;
    font-size: 1.3rem;
    padding: 0.6rem 1.2rem;
    ${(p) =>
      p?.$noBorderStyle &&
      css`
        border: none;
        background: #f9f9f9 !important;
        font-size: 1.4rem;
        font-weight: 500;
        outline: none;
      `}
  }
`;
