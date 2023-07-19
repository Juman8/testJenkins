import styled from 'styled-components';

interface IProps {
  Icon: () => JSX.Element | JSX.Element[];
  className?: string;
}

export const ComponentTool = (props: IProps) => {
  const { Icon, className } = props;
  return <StyledTool className={className}>{Icon()}</StyledTool>;
};

const StyledTool = styled.div`
  background-color: #9fd357;
  width: 40px;
  height: 40px;
  border-radius: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(p) => p.theme.breakPoints.breakIPadPro}) {
    .isSmall {
      width: 16px;
      height: 16px;
      padding: 2px;
    }
  }
`;
