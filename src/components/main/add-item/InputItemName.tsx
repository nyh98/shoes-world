import React from 'react';
import { UploadStateProps } from '../../../types/types';

export default function InputItemName({ setUploadItem }: UploadStateProps) {
  return (
    <p>
      상품명{' '}
      <input
        type="text"
        onChange={e => {
          setUploadItem(prev => ({ ...prev, itemName: e.target.value }));
        }}
      />
    </p>
  );
}
