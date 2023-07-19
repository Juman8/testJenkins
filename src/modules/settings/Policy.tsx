import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { selectApp, useAppDispatch, useAppSelector } from '@redux';
import { PolicySection } from '@components';
import { ContentStateConverter, convertToHTML } from 'draft-convert';
import { LogApp } from '@utils';
import { settingAPI } from '@api';
import { toast } from 'react-toastify';
import { ContentState, convertFromHTML, EditorState } from 'draft-js';

export const PolicyModule = () => {
  const navigate = useNavigate();
  const [privacy, setPrivacy] = useState(EditorState.createEmpty());
  const editorRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector(selectApp);
  const onUpdatePrivacyPolicy = async () => {
    LogApp(
      convertToHTML(editorRef.current?.getCurrentContent()),
      'editorRef.current?.getCurrentContent()',
    );
    const privacyPolicy = convertToHTML(editorRef.current?.getCurrentContent());
    try {
      const res = await settingAPI.updatePrivacyPolicy({ privacy_policy: privacyPolicy });
      toast.success('Update successfully!', {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode,
      });
    } catch (error) {}
  };
  const getPrivacyPolicy = async () => {
    try {
      const res = await settingAPI.getPrivacyPolicy();
      const blocksFromHTML = convertFromHTML(res.data);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      const editorState = EditorState.createWithContent(contentState);
      setPrivacy(editorState);
    } catch (error) {}
  };
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getPrivacyPolicy();
  }, []);
  return (
    <PolicySection
      privacy={privacy}
      editorRef={editorRef}
      onUpdatePrivacyPolicy={onUpdatePrivacyPolicy}
      goBack={goBack}
    />
  );
};
