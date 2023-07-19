import { settingAPI, storeAPI } from '@api';
import { BranchGroupSection, PopoverPopup, SharedButton, TickBox, Trash } from '@components';
import { MAIN_THEME_DATA } from '@configs';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  BranchDetailRoot,
  BranchGroupData,
  BranchGroupRoot,
  BranchListType,
  BranchTableColumn,
  CreatedBranchGroupRoot,
  DropdownProps,
  StoreRoot,
  StoresInfo,
} from '@interfaces';
import { selectApp, setCurrentPage, setLoading, useAppDispatch, useAppSelector } from '@redux';
import { LogApp } from '@utils';
import { ColumnsType } from 'antd/lib/table';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import * as yup from 'yup';
const cSchema = yup.object().shape({
  c_branch_name: yup.string().required('Branch group name is required'),
});
const eSchema = yup.object().shape({
  branch_name: yup.string().required('Branch name is required'),
});
const columns: ColumnsType<BranchTableColumn> = [
  { title: 'No.', dataIndex: 'no', key: 'no' },
  { title: 'Branch group name', dataIndex: 'branchName', key: 'branchName' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (value) => {
      return (
        <div className="flex items-center justify-center">
          {/* <SharedButton
            onClick={() => {
              value.onAdd()
            }}
            className='btn-action'
            textColor='white'
            backgroundColor={MAIN_THEME_DATA.mainColor}
            prevIcon={<Plus color='white' />}
            text='Add'
          /> */}
          <SharedButton
            onClick={() => {
              value.onEdit();
            }}
            className="btn-action btn-edit"
            textColor="white"
            // backgroundColor={MAIN_THEME_DATA.mainColor}
            prevIcon={<TickBox color="white" />}
            text="Edit"
          />
          <PopoverPopup
            content={
              <StyledConfirmPopup>
                <h5 className="text-center items-center mb-2 text-current text-base">Alert</h5>
                <p className="text-sm">Are you want to delete this branch?</p>
              </StyledConfirmPopup>
            }
            isHaveConfirmButton
            onConfirm={() => {
              value.onDelete(value.key);
            }}
          >
            <SharedButton
              className="btn-action"
              backgroundColor={MAIN_THEME_DATA.mainColor}
              prevIcon={<Trash color={'white'} />}
              textColor="white"
              text="Delete"
            />
          </PopoverPopup>
        </div>
      );
    },
  },
];
const getDropdownValues = (data: StoresInfo[]): DropdownProps => {
  return data.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
};

export const BranchGroupModule = () => {
  const { themeMode, currentPage } = useAppSelector(selectApp);
  const {
    register: eRegister,
    handleSubmit: eSubmit,
    setValue,
    reset: eReset,
    getValues,
    formState: { errors: eErrors },
  } = useForm<FieldValues>({
    resolver: yupResolver(eSchema),
    defaultValues: {
      branch_id: 0,
      branch_name: '',
    },
  });
  const {
    register: cRegister,
    handleSubmit: cSubmit,
    setValue: cSetValue,
    reset: cReset,
    formState: { errors: cErrors },
  } = useForm<FieldValues>({
    resolver: yupResolver(cSchema),
    defaultValues: {
      c_branch_name: '',
      branches: '',
    },
  });

  const dispatch = useAppDispatch();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [payload, setPayload] = useState({ page: currentPage || 1, num: 20, title: '' });
  const [storePayload, setStorePayload] = useState({ page: 1, num: 20, title: '' });
  const [stores, setStores] = useState<DropdownProps>([]);
  const [branchGroups, setBranchGroups] = useImmer<BranchGroupData>({
    limit: 0,
    count: 0,
    data: [],
  });

  const [branches, setBranches] = useImmer<StoresInfo[]>([]);

  const onCreateModalVisible = (value: boolean) => {
    cReset({});
    setCreateModalVisible(value);
  };

  const onEditModalVisible = (value: boolean) => (branchName: string, branchId: number) => {
    LogApp(value, branchName, 'runnn');
    setEditModalVisible(value);
    eReset({
      branch_name: branchName,
      branch_id: branchId,
    });
  };

  const onSearch = debounce((value: string) => {
    setPayload({ ...payload, title: value.trim(), page: 1 });
  }, 500);

  const getBranch = async () => {
    try {
      const res: BranchGroupRoot = await settingAPI.getBranchGroup(payload);
      const newResponse: BranchTableColumn[] = res.data.branchGroups.map((item, index) => {
        return {
          key: item.id,
          no: index + 1,
          branchName: item.title,
          onEdit: () => {
            onGetBranchDetail(item.id);
          },
          onDelete: (id) => {
            deleteBranch(id)(res.data.branchGroups.findIndex((val) => val.id === id));
          },
        };
      });
      setBranchGroups({
        limit: res.data.limit,
        count: res.data.count,
        data: newResponse,
      });
    } catch (error) {}
  };

  const deleteBranch = (id: number) => async (foundIndex: number) => {
    try {
      const res = await settingAPI.deleteBranchGroup(id);
      if (foundIndex !== -1)
        setBranchGroups((draft) => {
          draft.data.splice(foundIndex, 1);
        });
      toast.success('Delete successfully!', {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode,
      });
    } catch (error) {}
  };

  const onPageChange = (page: number) => {
    dispatch(setCurrentPage(Number(page)));
    setPayload({ ...payload, page });
  };

  const onSelectedBranchSelect = (id: number) => {
    const foundIndex = branches.findIndex((item) => item.id === id);
    setBranches((draft) => {
      draft[foundIndex].isChecked = !draft[foundIndex].isChecked;
      draft = draft.filter((item) => !item.isChecked).sort((a, b) => a.id - b.id);
    });
  };

  const onAvailableBranchSelect = (id: number) => {
    const foundIndex = branches.findIndex((item) => item.id === id);
    setBranches((draft) => {
      draft[foundIndex].isChecked = !draft[foundIndex].isChecked;
      draft = draft.filter((item) => !item.isChecked).sort((a, b) => a.id - b.id);
    });
  };

  const moveToAvailable = () => {
    const selectedBranches = branches.filter((item) => item.isChecked);
    setBranches((draft) => {
      draft.unshift(...selectedBranches);
      draft.sort((a, b) => a.id - b.id);
      draft = draft.filter((item) => !item.isChecked).sort((a, b) => a.id - b.id);
    });
  };

  const moveToSelected = () => {
    const selectedBranches = branches.filter((item) => item.isChecked);
    setBranches((draft) => {
      draft.unshift(...selectedBranches);
      draft.sort((a, b) => a.id - b.id);
      draft = draft.filter((item) => !item.isChecked).sort((a, b) => a.id - b.id);
    });
  };

  const getStores = async () => {
    try {
      const res: StoreRoot = await storeAPI.getStores(storePayload);
      setStores(getDropdownValues(res.data.storesInfo));
    } catch (error) {}
  };

  const onCreateBranch = cSubmit(async (data) => {
    try {
      dispatch(setLoading(true));
      const res: CreatedBranchGroupRoot = await settingAPI.createBranchGroup({
        title: data.c_branch_name,
        storeIds: data.branches,
      });
      getBranch();
      onCreateModalVisible(false);
      toast.success('Create successfully!', {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode,
      });
    } catch (error) {
    } finally {
      dispatch(setLoading(false));
    }
  });

  const onEditBranch = eSubmit(async (data) => {
    try {
      dispatch(setLoading(true));
      const res: CreatedBranchGroupRoot = await settingAPI.updateBranchGroupDetail(data.branch_id, {
        title: data.branch_name,
        storeIds: branches.filter((item) => item.isChecked).map((item) => item.id),
      });
      await getBranch();
      onEditModalVisible(false)('', 0);
      toast.success('Edit successfully!', {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode,
      });
    } catch (error) {
    } finally {
      dispatch(setLoading(false));
    }
  });

  const onGetBranchDetail = async (id: number) => {
    try {
      dispatch(setLoading(true));
      const res: BranchDetailRoot = await settingAPI.getBranchGroupDetail(id);
      const selected = res.data.selectStoresInfo.map((item) => {
        return {
          ...item,
          isChecked: false,
        };
      });
      const available = res.data.availableStoresInfo.map((item) => {
        return {
          ...item,
          isChecked: true,
        };
      });
      setBranches([...selected, ...available]);
      onEditModalVisible(true)(res.data.branchGroupInfo.title, res.data.branchGroupInfo.id);
    } catch (error) {
      LogApp(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleChangePageSize = (size: number) => {
    setPayload({ ...payload, num: size });
  };

  useEffect(() => {
    getBranch();
  }, [payload.page, payload.title, payload.num]);

  useEffect(() => {
    getStores();
  }, [storePayload.page, storePayload.title, storePayload.num]);

  return (
    <BranchGroupSection
      branches={branches}
      eRegister={eRegister}
      onSearch={onSearch}
      branchGroups={branchGroups}
      onCreateModalVisible={onCreateModalVisible}
      createModalVisible={createModalVisible}
      editModalVisible={editModalVisible}
      columns={columns}
      onPageChange={onPageChange}
      currentPage={payload.page}
      onSelectedBranchSelect={onSelectedBranchSelect}
      onAvailableBranchSelect={onAvailableBranchSelect}
      moveToAvailable={moveToAvailable}
      moveToSelected={moveToSelected}
      onEditModalVisible={onEditModalVisible}
      stores={stores}
      cSetValue={cSetValue}
      cRegister={cRegister}
      onCreateBranch={onCreateBranch}
      onEditBranch={onEditBranch}
      cErrors={cErrors}
      eErrors={eErrors}
      onChangePageSize={handleChangePageSize}
    />
  );
};
const StyledConfirmPopup = styled.div`
  .btn {
    padding: 0.4rem 0.3rem;
  }
`;
