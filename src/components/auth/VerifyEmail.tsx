import React, { BaseSyntheticEvent, memo } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { Statistic } from 'antd';

import { SharedButton, SharedCheckbox, ShareInput } from '@components';
import { ILoginFields } from '@interfaces';
import { AUTH_THEME_COLOR, RESEND_OTP_COUNTDOWN_TIME } from '@configs';
import { themes, useTheme } from '@theme';
import moment from 'moment';

interface IProps {
  errors: Partial<FieldErrorsImpl<any>>;
  countdown?: boolean;
  register: UseFormRegister<FieldValues>;
  redirectToForgot?: () => void;
  handleVerifyEmail: (e?: BaseSyntheticEvent<ILoginFields, any, any> | undefined) => Promise<void>;
  handleResendEmail?: () => void;
  onEndResendOTPCountdown: () => void;
}

export const VerifyEmailForm = memo((props: IProps) => {
  const {
    errors,
    countdown,
    register,
    handleVerifyEmail,
    redirectToForgot,
    handleResendEmail,
    onEndResendOTPCountdown,
  } = props;

  const { theme } = useTheme();

  const { Countdown } = Statistic;

  return (
    <StyledVerifyEmailForm className="verify-email__section">
      {/* @ts-ignore */}
      <form onSubmit={handleVerifyEmail} className="verify-form">
        <ShareInput
          // label="OTP"
          placeholder="Verify code"
          name="otp"
          className="input"
          onChange={() => {}}
          errors={errors['otp']?.message}
          register={register}
        />
        <div className="resend-email">
          {!countdown ? (
            <span className="redirect-btn resend-text" onClick={handleResendEmail}>
              Resend OTP?
            </span>
          ) : (
            <>
              <span className="resend-text">Send OTP again in </span>
              {React.createElement(Countdown, {
                className: 'countdown-resendOTP',
                onFinish: () => onEndResendOTPCountdown(),
                // value: Date.now() + 1000 * 60,
                value: moment().add(RESEND_OTP_COUNTDOWN_TIME, 's').valueOf(),
                format: 'mm:ss',
              })}
            </>
          )}
        </div>
        <div className="actions">
          <SharedButton
            typeHtml="submit"
            text="Submit"
            className="submit__btn login-btn"
            backgroundColor={AUTH_THEME_COLOR}
            btnStyle="pad"
          />
          <SharedButton
            onClick={redirectToForgot}
            text="Back"
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
    </StyledVerifyEmailForm>
  );
});

export const StyledVerifyEmailForm = styled.section`
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

  .resend-email {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .resend-text {
      font-size: 1.6rem;
      font-weight: 400;
      margin-right: 0.6rem;
    }
    .countdown-resendOTP {
      .ant-statistic-content {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${AUTH_THEME_COLOR};
      }
    }
  }

  .verify-form {
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

    .inner-input {
      width: 100%;
      height: 4.6rem;
    }

    .agree-policy__cb {
      margin-bottom: 1.8rem;
    }
  }
`;
