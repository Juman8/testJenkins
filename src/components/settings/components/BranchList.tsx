import { SharedCheckbox } from '@components';
import styled from 'styled-components';

export interface BranchListProps {
  data: any;
  onSelect: (value: number) => void;
}
export const BranchList = ({ data, onSelect }: BranchListProps) => {
  return (
    <StyledBranchList>
      {data.map((item: any, index: number) => {
        return (
          <div key={item.id} className="branch-item-wrapper">
            <SharedCheckbox
              size="2rem"
              id={`${item.name}${index}`}
              type="checkbox"
              defaultChecked={item.isChecked}
              key={`branchChecked:${item.isChecked || ''}`}
              value={item.isChecked}
              onChange={(value: any) => {
                onSelect(item.id);
              }}
              text={item.name}
            />
          </div>
        );
      })}
    </StyledBranchList>
  );
};
const StyledBranchList = styled.div`
  padding-left: 1rem;
  height: 20rem;
  overflow-y: scroll;
  .branch-item-wrapper {
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 3px 20px #0000000b;
  }
`;
