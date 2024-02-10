import React from 'react';
import { UploadStateProps } from '../../../types/types';

export default function InputPrice({ setUploadItem }: UploadStateProps) {
  return (
    <p>
      가격{' '}
      <input
        type="number"
        onChange={e =>
          setUploadItem(prev => ({ ...prev, price: e.target.value }))
        }
      />
    </p>
  );
}
