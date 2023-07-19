import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import styled from 'styled-components';

import { SharedButton, SharedToggle, ShareInput } from '@components';
import { MAIN_THEME_DATA } from '@configs';
import { IMerchantInfo } from '@interfaces';
import { Tabs } from 'antd';

interface IProps {
  register: UseFormRegister<FieldValues>;
  registerPass: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onEditProfile: () => void;
  onSubmitChangePass: () => void;
  errors: FieldErrors<FieldValues>;
  errorsPass: FieldErrors<FieldValues>;
}

export const UserProfileSection = (props: IProps) => {
  const {
    register,
    watch,
    setValue,
    onEditProfile,
    errors,
    registerPass,
    errorsPass,
    onSubmitChangePass,
  } = props;
  const watchNoti = watch('receive_noti');
  return (
    <StyledGeneralSpecialSection>
      <div className="details-profile">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="User information" key="1">
            <form onSubmit={onEditProfile} className="left-form">
              <ShareInput register={register} name="email" label="Email" disabled />
              <ShareInput
                register={register}
                containerClassName="m-top"
                name="full_name"
                label="Full name"
                errors={errors['full_name']?.message}
                required
              />
              <SharedToggle
                className="m-top-2"
                checked={watchNoti}
                name="receive_noti"
                text="Public holiday reminder"
                setValue={setValue}
              />
              <div className="btn-wrapper">
                {/* <SharedButton
                  typeHtml="button"
                  className="btn-cancel"
                  textColor="white"
                  backgroundColor={MAIN_THEME_DATA.mainColor}
                  text={'Cancel'}
                /> */}
                <SharedButton
                  typeHtml="submit"
                  className="btn-save"
                  textColor="white"
                  backgroundColor={MAIN_THEME_DATA.mainColor}
                  text={'Save'}
                />
              </div>
            </form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Change password" key="2">
            <form onSubmit={onSubmitChangePass} className="right-form">
              <ShareInput
                type="password"
                register={registerPass}
                name="password"
                label="Password"
                required
                errors={errorsPass['password']?.message}
                haveShowPassIcon
              />
              <ShareInput
                type="password"
                register={registerPass}
                containerClassName="m-top"
                name="new_password"
                label="New password"
                required
                errors={errorsPass['new_password']?.message}
                haveShowPassIcon
              />
              <ShareInput
                type="password"
                register={registerPass}
                containerClassName="m-top"
                name="conf_password"
                label="Confirm password"
                required
                errors={errorsPass['conf_password']?.message}
                haveShowPassIcon
              />
              <div className="btn-wrapper">
                <SharedButton
                  typeHtml="submit"
                  className="btn-save"
                  textColor="white"
                  backgroundColor={MAIN_THEME_DATA.mainColor}
                  text={'Change password'}
                />
              </div>
            </form>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </StyledGeneralSpecialSection>
  );
};

const StyledGeneralSpecialSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .details-profile {
    width: 100%;
    .ant-tabs-nav {
      padding: 0 3.5rem;
      .ant-tabs-nav-list {
        /* width: 100%; */
      }

      .ant-tabs-tab {
        /* width: 100%; */
        &:hover {
          color: ${MAIN_THEME_DATA.mainColor};
        }

        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          /* color: ${MAIN_THEME_DATA.mainColor}; */
        }
      }
    }
    .ant-tabs-content-holder {
      padding: 0 3.5rem;
    }
  }
  .m-top {
    margin-top: 1rem;
  }
  .m-top-2 {
    margin-top: 2rem;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .right-form {
    width: 50%;
    margin-left: 2rem;
    .btn-save {
      align-self: center;
      width: fit-content;
      padding: 1rem 2rem;
    }
  }
  .left-form {
    width: 50%;
    .btn-save {
      align-self: center;
      width: fit-content;
      padding: 1rem 2rem;
    }
    .btn-cancel {
      margin-right: 1rem;
      width: fit-content;
      padding: 1rem 2rem;
    }
  }
`;
