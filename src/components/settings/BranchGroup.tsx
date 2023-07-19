import {
  AppModal,
  ChevronDownIcon,
  DoubleChevron,
  Pagination,
  Plus,
  PopoverPopup,
  SearchIcon,
  SharedButton,
  SharedCheckbox,
  SharedTable,
  ShareInput,
  ShareSelectInput,
  TickBox,
  Trash,
} from '@components';
import { MAIN_THEME_DATA, PAGE_SIZE_OPTIONS } from '@configs';
import {
  BranchGroupData,
  BranchListType,
  BranchPayload,
  BranchTableColumn,
  DropdownProps,
  StoresInfo,
} from '@interfaces';
import { themes, useTheme } from '@theme';
import { LogApp } from '@utils';
import { SelectProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { BaseSyntheticEvent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import styled from 'styled-components';
import { BranchList } from './components/BranchList';

interface IProps {
  createModalVisible: boolean;
  editModalVisible: boolean;
  onCreateModalVisible: (value: boolean) => void;
  onPageChange: (value: number) => void;
  onSelectedBranchSelect: (value: number) => void;
  onAvailableBranchSelect: (value: number) => void;
  onSearch: (value: string) => void;
  columns: ColumnsType<BranchTableColumn>;
  branchGroups: BranchGroupData;
  currentPage: number;
  eRegister: UseFormRegister<FieldValues>;
  cRegister: UseFormRegister<FieldValues>;
  branches: StoresInfo[];
  moveToSelected: () => void;
  moveToAvailable: () => void;
  onEditModalVisible: (value: boolean) => (branchName: string, branchId: number) => void;
  stores: DropdownProps;
  cSetValue: UseFormSetValue<FieldValues>;
  onCreateBranch: (e?: BaseSyntheticEvent<BranchPayload, any, any> | undefined) => Promise<void>;
  onEditBranch: (e?: BaseSyntheticEvent<BranchPayload, any, any> | undefined) => Promise<void>;
  eErrors: FieldErrors<FieldValues>;
  cErrors: FieldErrors<FieldValues>;
  onChangePageSize: (size: number) => void;
}

export const BranchGroupSection = ({
  branches,
  createModalVisible,
  onCreateModalVisible,
  columns,
  branchGroups,
  currentPage,
  onPageChange,
  onSearch,
  editModalVisible,
  eRegister,
  onSelectedBranchSelect,
  onAvailableBranchSelect,
  moveToAvailable,
  moveToSelected,
  onEditModalVisible,
  stores,
  cRegister,
  cSetValue,
  onCreateBranch,
  onEditBranch,
  cErrors,
  eErrors,
  onChangePageSize,
}: IProps) => {
  const { theme } = useTheme();
  const isAvailableBranchesEmpty = branches.filter((item) => item.isChecked).length === 0;
  const isSelectedBranchesEmpty = branches.filter((item) => item.isChecked).length === 0;
  LogApp(branches, 'brs');
  return (
    <StyledBranchGroup>
      <StyledSearchWrapper>
        <div className="input-wrapper">
          <ShareInput
            containerClassName="search-branch__box"
            className="search-branch__input"
            onChange={(e: any) => {
              onSearch(e.target.value);
            }}
            placeholder="Search by name"
            prevIcon={<SearchIcon />}
          />
        </div>
        <SharedButton
          onClick={() => {
            onCreateModalVisible(true);
          }}
          className="create-branch__button"
          backgroundColor={MAIN_THEME_DATA.mainColor}
          text="Add New Branch Group"
          btnStyle="pad"
        />
      </StyledSearchWrapper>
      <SharedTable columns={columns} dataSource={branchGroups.data} />
      <div className="bottom-pagination">
        <div className="page-size">
          <span className="label">Page Size </span>
          <ShareSelectInput
            data={PAGE_SIZE_OPTIONS}
            className="page-size-select"
            defaultValue={branchGroups?.limit}
            onChange={(value) => {
              onChangePageSize(Number(value));
            }}
            key={`genderTypeSelect:${branchGroups?.limit}`}
          />
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={branchGroups.count}
          pageSize={branchGroups.limit}
          onPageChange={(page: number) => {
            onPageChange(page);
          }}
        />
      </div>
      {createModalVisible && (
        <AppModal
          open
          onClose={() => {
            onCreateModalVisible(false);
          }}
        >
          {/* @ts-ignore */}
          <form onSubmit={onCreateBranch} className="modal">
            <h2>Create new branch group</h2>
            <ShareInput
              name="c_branch_name"
              register={cRegister}
              label="Branch group name"
              required
              placeholder="Enter name"
              errors={cErrors['c_branch_name']?.message}
            />
            <div className="dropdown">
              <ShareSelectInput
                popupClassName="ignore-onClickOutside"
                mode="multiple"
                label="Branches"
                data={stores}
                placeholder="Branches"
                name="branches"
                setValue={cSetValue}
              />
            </div>
            <div className="button-wrapper">
              <SharedButton
                onClick={() => {
                  onCreateModalVisible(false);
                }}
                typeHtml="button"
                className="btn-save btn-cancel"
                backgroundColor="transparent"
                textColor={theme?.colors?.button?.text || themes.theme.light.colors.button.text}
                borderColor={
                  theme?.colors?.button?.border || themes.theme.light.colors.button.border
                }
                text={'Cancel'}
              />
              <SharedButton
                typeHtml="submit"
                className="btn-save"
                textColor="white"
                backgroundColor={MAIN_THEME_DATA.mainColor}
                text={'Save'}
              />
            </div>
          </form>
        </AppModal>
      )}
      {editModalVisible && (
        <AppModal
          open
          onClose={() => {
            onEditModalVisible(false)('', 0);
          }}
        >
          {/* @ts-ignore */}
          <form onSubmit={onEditBranch} className="modal">
            <h2>Edit branch group</h2>
            <ShareInput
              register={eRegister}
              name="branch_name"
              label=""
              required
              errors={eErrors['branch_name']?.message}
            />
            <div className="branch-list-block">
              <div className="branch-list-wrapper">
                <div className="selected-list">
                  <h4>Selected branches:</h4>
                  <BranchList
                    data={branches.filter((item) => !item.isChecked)}
                    onSelect={onSelectedBranchSelect}
                  />
                </div>
                {/* <div className="move-wrapper">
                  <div>
                    <SharedButton
                      // disabled={isSelectedBranchesEmpty}
                      onClick={moveToAvailable}
                      className="move-btn"
                      backgroundColor={MAIN_THEME_DATA.mainColor}
                      text={<DoubleChevron color="white" />}
                    />
                  </div>
                  <div>
                    <SharedButton
                      // disabled={isAvailableBranchesEmpty}
                      onClick={moveToSelected}
                      className="move-btn"
                      backgroundColor={MAIN_THEME_DATA.mainColor}
                      text={<DoubleChevron transform="rotate(180)" color="white" />}
                    />
                  </div>
                </div> */}
                <div className="available-list">
                  <h4>Available branches:</h4>
                  <BranchList
                    data={branches.filter((item) => item.isChecked)}
                    onSelect={onAvailableBranchSelect}
                  />
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <SharedButton
                onClick={() => {
                  onEditModalVisible(false)('', 0);
                }}
                typeHtml="button"
                className="btn-save btn-cancel"
                backgroundColor="transparent"
                textColor={theme?.colors?.button?.text || themes.theme.light.colors.button.text}
                borderColor={
                  theme?.colors?.button?.border || themes.theme.light.colors.button.border
                }
                text={'Cancel'}
              />
              <SharedButton
                // disabled={isAvailableBranchesEmpty}
                typeHtml="submit"
                className="btn-save"
                textColor="white"
                backgroundColor={MAIN_THEME_DATA.mainColor}
                text={'Save'}
              />
            </div>
          </form>
        </AppModal>
      )}
    </StyledBranchGroup>
  );
};
const StyledBranchGroup = styled.div`
  .bottom-pagination {
    margin-top: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .page-size {
      display: flex;
      align-items: center;
      .label {
        display: inline-block;
        white-space: nowrap;
        padding-right: 0.8rem;
      }
    }
  }
  .btn-action {
    align-self: center;
    width: fit-content;
    padding: 0.8rem 1.8rem;
  }
  .btn-edit {
    margin: 0rem 1rem;
  }
  .modal {
    width: 100rem;
    @media (max-width: 1280px) {
      width: 70rem;
    }
    @media (max-width: 820px) {
      width: 50rem;
    }
    .dropdown {
      margin-top: 1rem;
      .ant-select-selector {
        padding: 0.4rem !important;
      }
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      width: 100%;
      height: 38px;
      padding: 0 11px;
    }
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
    .button-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      .btn-save {
        align-self: center;
        width: fit-content;
        padding: 1rem 2rem;
      }
      .btn-cancel {
        margin-right: 1rem;
      }
    }
    .branch-list-block {
      display: flex;
      justify-content: center;
      .branch-list-wrapper {
        h4 {
          margin-bottom: 1rem;
        }
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        background-color: #f1f5f9;
        padding: 1rem 0rem;
        .selected-list {
          width: 40%;
        }
        .available-list {
          width: 40%;
        }
        .move-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .move-btn {
            padding: 0.8rem 1rem;
            width: fit-content;
          }
        }
      }
    }
  }
`;
const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 2rem;
  .search-branch__box {
    min-width: 20rem;
    width: fit-content;
    .search-branch__input {
      height: 4.5rem;
    }
  }
  .create-branch__button {
    height: 4.5rem;
    width: fit-content;
  }
  /* .input-wrapper {
    width: 30%;
    margin-right: 2rem;
  }
  .text-button {
    padding: 0.6rem 1.2rem;
  } */
`;
