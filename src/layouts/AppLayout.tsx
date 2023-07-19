import { Layout } from 'antd';
import styled from 'styled-components';

import { ILayout } from '@interfaces';
import { HeaderNodule, InnerAppModule, SidebarModule } from '@modules';
import {
  HEADER_HEIGHT,
  HEADER_PADDING_TOP,
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH,
} from '@configs';
import { selectLayout, useAppSelector } from '@redux';
import { LogApp } from '@utils';

export const AppLayout = (props: ILayout) => {
  const { children } = props;
  const { sidebarCollapsed } = useAppSelector(selectLayout);

  LogApp('C123', String(sidebarCollapsed));
  return (
    <StyledAppLayout className="main-layout">
      <HeaderNodule />
      <Layout className="content-layout">
        <SidebarModule />
        <StyledPageInner sidebarCollapsed={sidebarCollapsed}>
          <InnerAppModule {...props}>{children}</InnerAppModule>
        </StyledPageInner>
      </Layout>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled((props) => <Layout {...props} />)`
  min-height: 100vh;
`;

const StyledPageInner = styled.div<{
  sidebarCollapsed?: boolean;
  backgroundColor?: string;
  backgroundColor2?: string;
}>`
  background-color: ${(p: any) => p?.theme.colors?.bgPage};
  transition: all 0.3s;
  /* margin-left: ${(p) => (p.sidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH)}; */
  padding: calc(${HEADER_HEIGHT} + ${HEADER_PADDING_TOP} + 3.2rem) 2.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;
