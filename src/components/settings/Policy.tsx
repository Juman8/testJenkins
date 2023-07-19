import { MAIN_THEME_DATA } from '@configs';
import { themes, useTheme } from '@theme';
import { LogApp } from '@utils';
import { ContentStateConverter } from 'draft-convert';
import { EditorState } from 'draft-js';
import React from 'react';
import styled from 'styled-components';
import { SharedButton, ShareTextEditor } from '../shared';
interface IProps {
  onUpdatePrivacyPolicy: () => void;
  editorRef: any;
  goBack: () => void;
  privacy: EditorState;
}
export const PolicySection = ({ onUpdatePrivacyPolicy, editorRef, goBack, privacy }: IProps) => {
  const { theme } = useTheme();
  return (
    <StyledPolicySection>
      <h3>Content</h3>
      <div className="editor-wrapper">
        <ShareTextEditor
          className="editorClassName"
          wrapperClassName="wrapperClassName"
          key={`privacy:${privacy}`}
          value={privacy}
          ref={editorRef}
        />
      </div>
      <div className="bottom-content">
        <div className="form__actions">
          <SharedButton
            typeHtml="button"
            className="btn-save btn-cancel"
            backgroundColor="transparent"
            textColor={theme?.colors?.button?.text || themes.theme.light.colors.button.text}
            borderColor={theme?.colors?.button?.border || themes.theme.light.colors.button.border}
            btnStyle="pad"
            text={'Cancel'}
            onClick={goBack}
          />
          <SharedButton
            onClick={onUpdatePrivacyPolicy}
            typeHtml="button"
            className="btn-save"
            textColor="white"
            btnStyle="pad"
            backgroundColor={MAIN_THEME_DATA.mainColor}
            text={'Save'}
          />
        </div>
      </div>
    </StyledPolicySection>
  );
};
const StyledPolicySection = styled.div`
  .editor-wrapper {
    margin-top: 1rem;
    position: relative;
    padding: 2rem 2.8rem;
    border-radius: 0.6rem;
    background: ${(p) => p.theme.colors.bgSection};
    box-shadow: 0px 3px 20px #0000000b;
    .wrapperClassName {
      height: 100%;
      width: 100%;
    }
    .editorClassName {
      resize: vertical;
      overflow: auto;
    }
  }
  .bottom-content {
    width: 100%;
    display: flex;
    margin-top: 3rem;
    align-items: center;
    justify-content: center;
    .form__actions {
      display: flex;
      width: 100%;
      .btn {
        width: calc((100% - 2rem) / 2);
        &:first-child {
          margin-right: 2rem;
        }
      }
      @media (min-width: 1280px) {
        display: flex;
        width: 100%;
        align-items: center;
        max-width: 23rem;
      }

      @media (max-width: 820px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
        .btn {
          width: 100%;
          &:first-child {
            margin-right: 0;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;
