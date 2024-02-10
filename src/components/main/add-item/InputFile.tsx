import React from 'react';
import { UploadStateProps } from '../../../types/types';

export default function InputFile({ setUploadItem }: UploadStateProps) {
  return (
    <>
      <input
        type="file"
        onChange={e => {
          if (e.target.files) {
            const file = e.target.files[0];
            //이미지 파일 체크
            if (!file.type.includes('image')) {
              alert('이미지 파일이 아닙니다');
              e.target.value = '';
              setUploadItem(prev => ({ ...prev, file: null }));
              return;
            }
            setUploadItem(prev => ({ ...prev, file }));
          }
        }}
      />
    </>
  );
}
