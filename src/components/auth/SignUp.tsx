import { BaseSyntheticEvent, memo } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { SharedButton, SharedCheckbox, ShareInput } from '@components';
import { ILoginFields } from '@interfaces';
import { AUTH_THEME_COLOR } from '@configs';
import { themes, useTheme } from '@theme';
import { StyledSignUpForm } from './signUpStyle';
import { LogApp } from '@utils';

interface IProps {
  errors: Partial<FieldErrorsImpl<any>>;
  agreePolicy?: boolean;
  register: UseFormRegister<FieldValues>;
  redirectToLogin?: () => void;
  handleSignUp: (e?: BaseSyntheticEvent<ILoginFields, any, any> | undefined) => Promise<void>;
  changeAgreePolicy?: () => void;
}

export const SignUpForm = memo((props: IProps) => {
  const { errors, agreePolicy, register, handleSignUp, redirectToLogin, changeAgreePolicy } = props;

  const { theme } = useTheme();

  LogApp('FORM sign up', errors);

  return (
    <StyledSignUpForm className="sign-up__section">
      {/* @ts-ignore */}
      <form onSubmit={handleSignUp} className="signUp-form">
        <ShareInput
          placeholder="Company name"
          name="name"
          className="input"
          type="text"
          onChange={() => {}}
          errors={errors['name']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Company brand"
          name="brandName"
          className="input"
          type="text"
          onChange={() => {}}
          errors={errors['brandName']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Phone"
          name="phone"
          className="input hidden-arrow-num-input"
          type="number"
          onChange={() => {}}
          errors={errors['phone']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Email"
          name="email"
          className="input"
          type="email"
          onChange={() => {}}
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
        <ShareInput
          placeholder="Confirm password"
          name="confirmPassword"
          className="input"
          type="password"
          errors={errors['confirmPassword']?.message}
          register={register}
          haveShowPassIcon
        />
        <ShareInput
          placeholder="Your name"
          name="fullName"
          className="input"
          type="text"
          onChange={() => {}}
          errors={errors['fullName']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Type of business"
          name="businessType"
          className="input"
          type="text"
          onChange={() => {}}
          errors={errors['businessType']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Work Phone"
          name="workPhone"
          className="input"
          type="number"
          onChange={() => {}}
          errors={errors['workPhone']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Work email"
          name="workMail"
          className="input"
          type="email"
          onChange={() => {}}
          errors={errors['workMail']?.message}
          register={register}
        />
        <ShareInput
          placeholder="Number of company people"
          name="people"
          className="input"
          type="number"
          onChange={() => {}}
          errors={errors['people']?.message}
          register={register}
        />
        <SharedCheckbox
          className="agree-policy__cb"
          size="2rem"
          id="agreePrivacy"
          name="agreePrivacy"
          type="checkbox"
          onChange={changeAgreePolicy}
          text="I agree to the Privacy Policy"
          checked={agreePolicy}
        />
        <div className="actions">
          <SharedButton
            typeHtml="submit"
            text="Register"
            className="submit__btn"
            backgroundColor={AUTH_THEME_COLOR}
            disabled={!agreePolicy}
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
    </StyledSignUpForm>
  );
});
