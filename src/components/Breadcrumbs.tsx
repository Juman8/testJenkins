import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { IBreadcrumbItem } from '@interfaces';
import { PATH_HOME } from '@configs';
import { LogApp } from '@utils';

interface IProps {
  data?: IBreadcrumbItem[];
}

export const Breadcrumbs = memo((props: IProps) => {
  const { data } = props;
  const { t } = useTranslation();
  return (
    <StyledBreadcrumbs className="app-breadcrumb" separator="">
      {/* <span className="app-breadcrumb-link app-bread">
        <NavLink to={PATH_DASHBOARD}>Dashboard</NavLink>
        <span className="app-breadcrumb-separator">&#62;</span>
      </span> */}
      <ol>
        {data?.map((item: IBreadcrumbItem, index: number) => {
          return (
            <li className="app-breadcrumb-item" key={index}>
              {!!index && <span className="app-breadcrumb-separator">&#62;</span>}
              <span className="app-breadcrumb-link">
                <NavLink to={item.path}>{t(`${item.label}`).replaceAll('-', ' ')}</NavLink>
              </span>
            </li>
          );
        })}
      </ol>
    </StyledBreadcrumbs>
  );
});

const StyledBreadcrumbs = styled((props) => <nav {...props} />)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5715;
  list-style: none;
  color: rgba(0, 0, 0, 0.45);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  ol {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .app-bread a {
    color: ${(p: any) => p?.theme.colors?.header?.text};
  }
  .app-breadcrumb a {
    color: rgba(0, 0, 0, 0.45);
    transition: color 0.3s;
  }
  .app-breadcrumb-separator {
    margin: 0 8px;
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.45);
  }
  .app-breadcrumb-link {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: capitalize;
  }
  .app-breadcrumb-item {
    &:not(:last-child) {
      .app-breadcrumb-link a {
        color: #b6b6b6;
      }
    }
    &:last-child {
      .app-breadcrumb-link a {
        color: #000;
        cursor: default;
      }
    }
  }

  @media (min-width: 768px) and (min-height: 813px) and (orientation: portrait) {
    /* display: none; */
  }
`;
