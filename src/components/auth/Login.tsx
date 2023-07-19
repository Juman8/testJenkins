import { BaseSyntheticEvent, memo } from 'react';
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { SharedButton, ShareInput } from '@components';
import { StyledLoginSection } from './loginStyle';
import { ILoginFields } from '@interfaces';
import { AUTH_THEME_COLOR } from '@configs';
import { themes, useTheme } from '@theme';

interface IProps {
  redirectToForgot?: () => void;
  redirectToSignUp?: () => void;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<any>>;
  handleLogin: (e?: BaseSyntheticEvent<ILoginFields, any, any> | undefined) => Promise<void>;
}

export const LoginForm = memo((props: IProps) => {
  const { errors, redirectToForgot, register, handleLogin, redirectToSignUp } = props;

  const { theme } = useTheme();

  return (
    <StyledLoginSection className="login__section">
      {/* @ts-ignore */}
      <form onSubmit={handleLogin} className="login-form">
        {/* <div className="login-wrap"> */}
        <ShareInput
          placeholder="Email"
          name="email"
          className="input"
          type="email"
          errors={errors['email']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Password"
          name="password"
          className="input"
          type="password"
          errors={errors['password']?.message}
          register={register}
          haveShowPassIcon
        />
        <div className="forgot-password">
          <p className='redirect-btn forgot-text"' onClick={redirectToForgot}>
            Forgot password?
          </p>
        </div>
        <div className="actions">
          <SharedButton
            typeHtml="submit"
            text="Login"
            className="submit__btn login-btn"
            backgroundColor={AUTH_THEME_COLOR}
            btnStyle="pad"
          />
          <SharedButton
            text="Register"
            onClick={redirectToSignUp}
            className="redirect__btn register-btn"
            backgroundColor={
              theme?.colors?.button?.borderBackground ||
              themes.theme.light.colors.button.borderBackground
            }
            textColor={theme?.colors?.button?.text || themes.theme.light.colors.button.text}
            borderColor={theme?.colors?.button?.border || themes.theme.light.colors.button.border}
            btnStyle="pad"
          />
        </div>
        {/* </div> */}
      </form>
      <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
        By signin up, you agree to our
        <a className="text-primary dark:text-slate-200" href="">
          &nbsp;Terms and Conditions&nbsp;
        </a>
        &amp;
        <a className="text-primary dark:text-slate-200" href="">
          &nbsp;Privacy Policy
        </a>
      </div>
    </StyledLoginSection>
  );
});
