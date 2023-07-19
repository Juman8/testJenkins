import React from 'react';

import logoUrl from './../../assets/images/logo.svg';
import illustrationUrl from './../../assets/images/illustration.svg';

interface IProps {
  introTitle: string | JSX.Element | JSX.Element[];
  introDesc: string | JSX.Element | JSX.Element[];
}

export const AuthInfo = (props: IProps) => {
  const { introTitle, introDesc } = props;

  return (
    <div className="hidden xl:flex flex-col min-h-screen z-10">
      <a href="" className="-intro-x flex items-center pt-5">
        <img alt="" className="w-10" src={logoUrl} />
        <span className="text-white text-xl ml-3">Admin</span>
      </a>
      <div className="my-auto">
        <img alt="" className="-intro-x w-1/2 -mt-16" src={illustrationUrl} />
        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
          {introTitle}
        </div>
        <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
          {introDesc}
        </div>
      </div>
    </div>
  );
};
