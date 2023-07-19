import { BaseSyntheticEvent, memo } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { SharedButton, SharedCheckbox, ShareInput } from '@components';
import { ILoginFields } from '@interfaces';
import { AUTH_THEME_COLOR } from '@configs';
import { themes, useTheme } from '@theme';
import { StyledSignUpForm } from './signUpStyle';
import styled from 'styled-components';

interface IProps {
  errors: Partial<FieldErrorsImpl<any>>;
  register: UseFormRegister<FieldValues>;
  redirectToLogin?: () => void;
  handleForgotPassword: (
    e?: BaseSyntheticEvent<ILoginFields, any, any> | undefined,
  ) => Promise<void>;
}

export const ForgotPasswordForm = memo((props: IProps) => {
  const { errors, register, handleForgotPassword, redirectToLogin } = props;

  const { theme } = useTheme();

  return (
    <StyledForgotPasswordForm className="forgot-password__section">
      {/* @ts-ignore */}
      <form onSubmit={handleForgotPassword} className="forgot-form">
        <ShareInput
          placeholder="Your email"
          name="email"
          className="input"
          type="email"
          onChange={() => {}}
          errors={errors['email']?.message}
          register={register}
        />
        <div className="actions">
          <SharedButton
            typeHtml="submit"
            text="Send"
            className="submit__btn login-btn"
            backgroundColor={AUTH_THEME_COLOR}
            btnStyle="pad"
          />
          <SharedButton
            onClick={redirectToLogin}
            text="Sign in"
            className="redirect__btn"
            backgroundColor={
              theme?.colors?.button?.borderBackground ||
              themes.theme.light.colors.button.borderBackground
            }
            textColor={theme?.colors?.button?.text || themes.theme.light.colors.button.text}
            borderColor={theme?.colors?.button?.border || themes.theme.light.colors.button.border}
            btnStyle="pad"
          />
        </div>
      </form>
    </StyledForgotPasswordForm>
  );
});

export const StyledForgotPasswordForm = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  @media (min-width: 1280px) {
    min-width: 41rem;
  }
  .heading {
    margin-bottom: 3.6rem;
    .heading__title {
      text-align: center;
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      color: ${(p) => p.theme.colors.text};
    }
    .desc {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(p) => p.theme.colors.subText};
    }
  }

  .actions {
    @media (min-width: 1280px) {
      display: flex;
      align-items: center;
      .btn {
        width: 12.8rem;
      }
    }
  }

  .forgot-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    .shared-input {
      margin-bottom: 2rem;
      .inner-input {
        height: 4.6rem;
      }
    }
    .submit__btn {
      @media (min-width: 1280px) {
        margin-right: 1.2rem;
        margin-bottom: 0;
      }
      margin-bottom: 1.2rem;
    }
    .forgot-password {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      .forgot-text {
        font-size: 1em;
        font-weight: 400;
        color: ${(p) => p.theme.colors.authText};
        margin-bottom: 3.6rem;
      }
    }

    .inner-input {
      width: 100%;
      height: 4.6rem;
    }

    .agree-policy__cb {
      margin-bottom: 1.8rem;
    }
  }
`;
