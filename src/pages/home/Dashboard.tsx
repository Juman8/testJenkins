import React, { useEffect } from 'react';

import { DashboardNodule, UploadListImageModule } from '@modules';
import styled from 'styled-components';

export const DashboardPage = () => {
  return (
    <StyledDashboardPage className="cashback-rules-page">
      <div className="page__head">
        <h2 className="title">Dashboard</h2>
      </div>
      <DashboardNodule />
    </StyledDashboardPage>
  );
};

const StyledDashboardPage = styled.div`
  .page__head {
    margin-bottom: 2rem;
    .title {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;
