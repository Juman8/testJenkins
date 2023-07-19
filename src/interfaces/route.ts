export interface IRoute {
  path?: string;
  page: any;
  layout?: any;
  haveSidebar?: boolean;
  breadcrumbs?: boolean;
  auth?: boolean;
}

export interface ILayout extends IRoute {
  children?: string | JSX.Element | JSX.Element[];
}
