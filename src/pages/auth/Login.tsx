import styled from 'styled-components';

import { LoginModule } from '@modules';
import { IMAGES } from '@assets';
import bgAuth from './../../assets/images/bg_auth.svg';
import logoUrl from './../../assets/images/logo.svg';
import illustrationUrl from './../../assets/images/illustration.svg';
import { AUTH_THEME_COLOR, MAIN_THEME_DATA, MAT_SM_SCREEN_WIDTH } from '@configs';
import { AuthInfo } from '@components';

export const LoginPage = () => {
  return (
    <StyledAuth background={IMAGES.backgroundLogin} className="login-page">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4 content-block ">
          {/* BEGIN: Login Info */}
          <AuthInfo
            introTitle={
              <>
                A few more clicks to <br />
                sign in to your account.
              </>
            }
            introDesc="Manage all your accounts in one place"
          />
          {/* END: Login Info */}
          {/* BEGIN: Login Form */}
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 auth-section">
            <a href="" className="-intro-x flex items-center pt-5 main-logo">
              <img alt="" className="w-10" src={logoUrl} />
              <span className="text-white text-xl ml-3">Admin</span>
            </a>
            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto auth-box">
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left heading">
                Sign In
              </h2>
              <div className="intro-x mt-2 text-slate-400 xl:hidden text-center desc">
                A few more clicks to sign in to your account. Manage all your accounts in one place
              </div>
              <LoginModule />
            </div>
          </div>
          {/* END: Login Form */}
        </div>
      </div>
    </StyledAuth>
  );
};

export const StyledAuth = styled.div<{ background?: string }>`
  /* width: 100vw;
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background: url(${bgAuth}) no-repeat center,
    linear-gradient(180deg, ${AUTH_THEME_COLOR}, ${MAIN_THEME_DATA});
  background-size: cover;
  background-blend-mode: multiply; */
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: auto;
  background-color: rgb(255 255 255);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: calc(${MAT_SM_SCREEN_WIDTH})) {
    background-color: ${AUTH_THEME_COLOR};
  }
  &:after {
    content: '';
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    margin-top: -20%;
    margin-bottom: -12%;
    margin-left: -13%;
    width: 57%;
    --tw-rotate: -4deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y));
    border-radius: 100%;
    --tw-bg-opacity: 1;
    background-color: ${AUTH_THEME_COLOR};
    @media (max-width: calc(${MAT_SM_SCREEN_WIDTH})) {
      display: none;
    }
  }

  &:before {
    content: '';
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    margin-top: -28%;
    margin-bottom: -15%;
    margin-left: -13%;
    width: 57%;
    --tw-rotate: -4deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y));
    border-radius: 100%;
    background-color: ${AUTH_THEME_COLOR};
    opacity: 0.2;
    @media (max-width: ${MAT_SM_SCREEN_WIDTH}) {
      display: none;
    }
  }

  .content-block {
    overflow: hidden;
  }

  .auth-section {
    .heading {
      margin-bottom: 0.8rem;
      @media (min-width: 1280px) {
        margin-bottom: 2.8rem;
        text-align: left;
      }
    }
    .desc {
      margin-bottom: 2.8rem;
      @media (min-width: 1280px) {
        text-align: left;
      }
    }
  }

  .auth-section {
    @media (max-width: 1279px) {
      flex-direction: column;
      .main-logo {
        margin: 0 auto 0.8rem;
      }
    }

    @media (min-width: 1279px) {
      .main-logo {
        display: none;
      }
    }
  }
`;
