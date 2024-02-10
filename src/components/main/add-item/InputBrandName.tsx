import React from 'react';
import { UploadStateProps } from '../../../types/types';

export default function InputBrandName({ setUploadItem }: UploadStateProps) {
  return (
    <p>
      브랜드명{' '}
      <select
        onChange={e =>
          setUploadItem(prev => ({ ...prev, brandName: e.target.value }))
        }
      >
        <optgroup label="brand">
          <option value={''} selected disabled hidden>
            브랜드를 선택해주세요
          </option>
          <option value={'Nike'}>Nike</option>
          <option value={'adidas'}>adidas</option>
          <option value={'Jordan'}>Jordan</option>
          <option value={'Vans'}>Vans</option>
        </optgroup>
      </select>
    </p>
  );
}
