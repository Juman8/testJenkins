import styled from 'styled-components';
import {
  Control,
  FieldErrorsImpl,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useWatch,
} from 'react-hook-form';
import { Col, Row } from 'antd';
import QRCode from 'react-qr-code';

import {
  InfoIcon,
  LinkIcon,
  PopoverPopup,
  SharedButton,
  SharedToggle,
  ShareInput,
} from '@components';
import { IMerchantInfo } from '@interfaces';
import { LogApp } from '@utils';
import { MAIN_THEME_DATA, MAT_SM_SCREEN_WIDTH_MIN, MEMBER_LINK } from '@configs';
import { SketchPicker } from 'react-color';
import { UploadImageModule } from '@modules';
interface IProps {
  data?: IMerchantInfo;
  isEdit?: boolean;
  errors: Partial<FieldErrorsImpl<any>>;
  watch: UseFormWatch<any>;
  onSubmit?: () => void;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  onCancel?: () => void;
  changeSelectedImage: (value: string) => void;
  control: Control<any>;
}

export const GeneralSection = (props: IProps) => {
  const {
    data,
    errors,
    isEdit,
    onCancel,
    setValue,
    onSubmit,
    register,
    watch,
    changeSelectedImage,
    control,
  } = props;
  const color = useWatch({ control, name: 'color' });
  const logo = useWatch({ control, name: 'logo' });
  const watchSend = useWatch({ control, name: 'allow_send_sms' });
  return (
    <StyledGeneralSection>
      <form onSubmit={onSubmit}>
        <StyledRow gutter={[20, 16]}>
          <Col className="gutter-row name-type-col name-type-col-left" md={24} lg={16} xl={18}>
            <div className="intro-y section-box">
              <div className="box-content border border-slate-200/60 dark:border-darkmode-400 rounded-md">
                <div className="head font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400">
                  <h3 className="box-title">Company Info</h3>
                </div>
                <div className="company-info__form pt-4">
                  <div className="desc">
                    <InfoIcon className="desc-icon" />
                    <span className="desc-text">
                      Some information about company can be quickly changed here.
                    </span>
                  </div>
                  <div className="form-field cannot-changed-field">
                    <div className="label">
                      <p className="label-text">Company name</p>
                      {/* <p className="label-desc">Extra points in member's General month (%)</p> */}
                    </div>
                    <ShareInput value={data?.name} className="input" disabled />
                  </div>
                  <div className="form-field cannot-changed-field">
                    <div className="label">
                      <p className="label-text">Brand name</p>
                    </div>
                    <ShareInput value={data?.brand_name} className="input" disabled />
                  </div>
                  <div className="form-field cannot-changed-field">
                    <div className="label">
                      <p className="label-text">Work email</p>
                    </div>
                    <ShareInput
                      // value={data?.email}
                      className="input"
                      name="workMail"
                      type="email"
                      errors={errors['workMail']?.message}
                      register={register}
                    />
                  </div>
                  <div className="form-field">
                    <div className="label">
                      <p className="label-text">Work phone</p>
                    </div>
                    <ShareInput
                      placeholder="Work Phone number"
                      name="workPhone"
                      className="input"
                      type="number"
                      errors={errors['workPhone']?.message}
                      register={register}
                    />
                  </div>
                  <div className="form-field">
                    <div className="label">
                      <p className="label-text">Phone</p>
                    </div>
                    <ShareInput
                      placeholder="Phone number"
                      name="phone"
                      className="input"
                      type="number"
                      errors={errors['phone']?.message}
                      register={register}
                    />
                  </div>
                  <div className="form-field">
                    <div className="label">
                      <p className="label-text">Type of business</p>
                    </div>
                    <ShareInput
                      placeholder="Business type"
                      name="businessType"
                      className="input"
                      errors={errors['businessType']?.message}
                      register={register}
                    />
                  </div>
                  <div className="form-field">
                    <div className="label">
                      <p className="label-text">Company peoples</p>
                    </div>
                    <ShareInput
                      placeholder="Number of staff"
                      name="peopleAmount"
                      type="number"
                      className="input"
                      errors={errors['peopleAmount']?.message}
                      register={register}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-y section-box mt-4">
              <div className="box-content border border-slate-200/60 dark:border-darkmode-400 rounded-md">
                <div className="head font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400">
                  <h3 className="box-title">Member theme settings</h3>
                </div>
                <StyledThemeSection $bg={color}>
                  <div className="company-info__form pt-4">
                    <div className="form-field">
                      <div className="label">
                        <p className="label-text">Theme color</p>
                      </div>
                      <div className="color-wrapper">
                        <PopoverPopup
                          content={
                            <SketchPicker
                              color={color}
                              onChange={(color) => setValue('color', color.hex)}
                            />
                          }
                        >
                          <div className="swatch">
                            <div className="color" />
                          </div>
                        </PopoverPopup>
                      </div>
                    </div>
                    <div className="form-field">
                      <div className="label">
                        <p className="label-text">Font size</p>
                      </div>
                      <ShareInput
                        placeholder="Font size"
                        name="font_size"
                        type="number"
                        className="input"
                        errors={errors['font_size']?.message}
                        register={register}
                      />
                    </div>
                    <div className="form-field">
                      <div className="label">
                        <p className="label-text">Icon</p>
                        <p className="label-desc">Click image to upload or change</p>
                      </div>
                      <div className="upload-wrapper">
                        <UploadImageModule
                          typeUpload="image"
                          onUploadEnd={changeSelectedImage}
                          defaultUrl={logo}
                          previewImageStyle="contain"
                        />
                      </div>
                    </div>
                  </div>
                </StyledThemeSection>
              </div>
            </div>
            {/* <div className="intro-y section-box mt-4">
              <div className="box-content border border-slate-200/60 dark:border-darkmode-400 rounded-md">
                <div className="head font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400">
                  <h3 className="box-title">SMS settings</h3>
                </div>
                <div className="company-info__form pt-4">
                  <div className="desc">
                    <InfoIcon className="desc-icon" />
                    <span className="desc-text">Allow to send sms to new members</span>
                  </div>
                  <SharedToggle
                    checked={watchSend}
                    name="allow_send_sms"
                    setValue={setValue}
                    text="Send sms to new members"
                  />
                </div>
              </div>
            </div> */}
          </Col>
          <Col className="gutter-row name-type-col name-type-col-right" md={24} lg={8} xl={6}>
            <div className="sticky top-0 linkqr-box">
              <div className="member-link">
                <div className="link-label">
                  <LinkIcon size={16} />
                  <span className="label-text">Member Link</span>
                </div>
                <a href={data?.url || MEMBER_LINK} title="" className="link" target="_blank">
                  {data?.url || MEMBER_LINK}
                </a>
              </div>
              <div className="qr">
                <QRCode
                  value={data?.url || MEMBER_LINK}
                  // style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                />
              </div>
            </div>
          </Col>
        </StyledRow>

        <div className="bottom-content">
          <div className="form__actions">
            <SharedButton
              typeHtml="submit"
              text={isEdit ? 'Save' : 'Create'}
              className="create-rule__button"
              backgroundColor={MAIN_THEME_DATA.mainColor}
              btnStyle="pad"
            />
          </div>
        </div>
      </form>
    </StyledGeneralSection>
  );
};

const StyledGeneralSection = styled.div`
  width: 100%;
  .desc {
    display: flex;
    align-items: center;
    margin: 1.2rem 0 2.3rem;
    .desc-icon {
      margin-right: 1rem;
    }
  }
  .section-box {
    background: ${(p) => p.theme.colors.bgSection};
    border-radius: 0.6rem;
    padding: 1.6rem 2.2rem;
    box-shadow: 0px 3px 20px #0000000b;
    .box-content {
      padding: 2.6rem;
      .head {
        padding-bottom: 2.3rem;
        .box-title {
          font-size: 1.6rem;
        }
      }
      .company-info__form {
        display: flex;
        flex-direction: column;
        width: 100%;
        .form-field {
          display: flex;
          flex-direction: column;
          margin-bottom: 2.6rem;
          .label {
            margin-right: 2.6rem;
            .label-text {
              font-size: 1.4rem;
              font-weight: 500;
              margin-bottom: 0.6rem;
              color: ${({ theme }: any) => theme?.colors?.text};
            }
            .label-desc {
              font-size: 1.3rem;
              font-weight: 400;
              color: ${({ theme }: any) => theme?.colors?.secondary};
            }
          }
          .value-text {
            font-size: 1.4rem;
            font-weight: 500;
            color: ${({ theme }: any) => theme?.colors?.secondary};
          }
          @media (min-width: 1280px) {
            flex-direction: row;
            align-items: center;
            .label {
              width: 43%;
            }
          }
        }
        .cannot-changed-field {
          /* flex-direction: row; */
          justify-content: space-between;
          /* align-items: center; */
        }
        .shared-input {
          margin-bottom: 0.8rem;
        }
        .inner-input,
        .ant-picker,
        input,
        .ant-select-selector {
          @media (min-width: 768px) {
            height: 4rem;
          }
        }
      }
    }
  }
  .linkqr-box {
    background: ${(p) => p.theme.colors.bgSection};
    border-radius: 0.6rem;
    padding: 1.6rem 2.2rem;
    box-shadow: 0px 3px 20px #0000000b;
    .member-link {
      padding-top: 0.6rem;
      margin-bottom: 2rem;
      /* display: flex; */
      align-items: center;
      .link-label {
        display: flex;
        align-items: center;
        margin-bottom: 0.8rem;
        .label-text {
          font-size: 1.3rem;
          font-weight: 500;
          margin-left: 0.8rem;
        }
      }
      .link {
        font-size: 1.3rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .qr {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 1.6rem;
    }
  }
  .bottom-content {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .form__actions {
      display: flex;
      width: 100%;
      .btn {
        width: 100%;
      }
      @media (min-width: 1280px) {
        display: flex;
        align-items: center;
        max-width: 23rem;
      }

      @media (max-width: 820px) {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0;
        .btn {
          width: 100%;
        }
      }
    }
  }
`;
const StyledThemeSection = styled.div<{ $bg: string }>`
  .note-text {
    font-size: 1rem;
    font-weight: 500;
    font-style: italic;
    color: #abc0c7;
    margin-bottom: 0;
    margin-top: -0.6rem;
  }
  .upload-wrapper {
    width: 100%;
  }
  .color-wrapper {
    width: 100%;

    .swatch {
      height: fit-content;
      padding: 0.6rem 1.2rem;
      display: inline-block;
      cursor: pointer;
      border: 1px #d8d8d8 solid;
      border-radius: 5px;
      width: 100%;
      max-width: 15rem;
      .color {
        height: 2.6rem;
        border-radius: 5px;
        background: ${(p) => p.$bg};
      }
    }
  }
`;
const StyledRow = styled((props) => <Row {...props} />)`
  margin-bottom: 1.4rem;
  width: 100%;
  height: fit-content;
  @media (min-width: ${MAT_SM_SCREEN_WIDTH_MIN}) {
    margin-bottom: 3.8rem;
    &:first-child {
      margin-bottom: 4.5rem;
    }
  }
`;
