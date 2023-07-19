import styled from 'styled-components';
import { PolicyModule } from '@modules';

export const PrivacyPolicyPage = () => {
  return (
    <StyledPolicyPage className="policy-page">
      <div className="page__title">
        <h2 className="title">Privacy & Policy</h2>
      </div>
      <div className="page__section">
        <PolicyModule />
      </div>
    </StyledPolicyPage>
  );
};

const StyledPolicyPage = styled.div`
  .page__title {
    margin-bottom: 2rem;
    .title {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  .page__section {
    /* position: relative;
    padding: 2rem 2.8rem;
    border-radius: 0.6rem;
    background: ${(p) => p.theme.colors.bgSection};
    box-shadow: 0px 3px 20px #0000000b; */
  }
`;
