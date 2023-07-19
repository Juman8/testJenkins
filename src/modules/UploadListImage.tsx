import { ShareUploadImage, ShareUploadImageBtn } from '@components';
import { isNum, LogApp } from '@utils';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export const UploadListImageModule = () => {
  const uploadBtnRef = useRef<HTMLInputElement>();

  const [selectedImage, setSelectedImage] = useState<any[]>();
  const [previewUrls, setPreviewUrls] = useState<string[]>();

  useEffect(() => {
    if (!selectedImage) {
      setPreviewUrls(undefined);
      return;
    }
    const listObjectUrl: any[] = selectedImage?.map((val, _) => {
      return URL.createObjectURL(val);
    });
    setPreviewUrls(listObjectUrl);
    // return () => URL.revokeObjectURL(listObjectUrl);
  }, [selectedImage]);

  LogApp('IMAGE_UPLOAD', selectedImage);
  LogApp('IMAGE URL', previewUrls);

  const handleUpload = () => {
    uploadBtnRef && uploadBtnRef?.current?.click();
  };

  const handleChangeImage = (e: ChangeEvent<any>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    // setSelectedImage(e.target.files[0]);
    setSelectedImage((prev) => {
      if (prev) return [...prev, ...e.target.files];
      else return [...e.target.files];
    });
  };

  LogApp(selectedImage);
  LogApp(previewUrls);

  const handleRemoveImage = (index: number) => {
    const newSelectdImage = selectedImage?.filter((_, i) => i !== index);
    setSelectedImage(newSelectdImage);
  };

  return (
    <ShareUploadImageBtn
      onUpload={handleUpload}
      previewUrls={previewUrls}
      uploadBtnRef={uploadBtnRef}
      onChangeImage={handleChangeImage}
      onRemoveImage={handleRemoveImage}
    />
  );
};
