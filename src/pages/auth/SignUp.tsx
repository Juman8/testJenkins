import { SignUpModule } from '@modules';
import { StyledAuth } from '.';
import { AuthInfo } from '@components';
import logoUrl from './../../assets/images/logo.svg';

export const SignUpPage = () => {
  return (
    <StyledAuth className="SignUp-page">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4 content-block ">
          <AuthInfo
            introTitle={
              <>
                A few more clicks to <br />
                sign up to your account.
              </>
            }
            introDesc="Register an account to be able to use useful features"
          />
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 auth-section">
            <a href="" className="-intro-x flex items-center pt-5 main-logo">
              <img alt="" className="w-10" src={logoUrl} />
              <span className="text-white text-xl ml-3">Admin</span>
            </a>
            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto auth-box">
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left heading">
                Sign Up
              </h2>
              <div className="intro-x mt-2 text-slate-400 xl:hidden text-center desc">
                Register an account to be able to use useful features
              </div>
              <SignUpModule />
            </div>
          </div>
        </div>
      </div>
    </StyledAuth>
  );
};
