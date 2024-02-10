import React from 'react';
import { UploadStateProps } from '../../../types/types';

export default function InputSize({
  uploadItem,
  setUploadItem,
}: UploadStateProps) {
  return (
    <p>
      사이즈 {uploadItem?.size.map(size => `${size}, `)}
      <select
        onChange={e =>
          setUploadItem(prev => {
            //사이즈 중복 체크
            if (!prev.size.includes(e.target.value)) {
              return {
                ...prev,
                size: [...prev.size, e.target.value],
              };
            }
            return prev;
          })
        }
      >
        <optgroup label="size">
          <option value={''} selected disabled hidden>
            사이즈를 선택해주세요
          </option>
          <option value={'220'}>220</option>
          <option value={'225'}>225</option>
          <option value={'230'}>230</option>
          <option value={'235'}>235</option>
          <option value={'240'}>240</option>
          <option value={'245'}>245</option>
          <option value={'250'}>250</option>
          <option value={'255'}>255</option>
          <option value={'260'}>260</option>
          <option value={'265'}>265</option>
          <option value={'270'}>270</option>
          <option value={'275'}>275</option>
          <option value={'280'}>280</option>
          <option value={'285'}>285</option>
          <option value={'290'}>290</option>
          <option value={'295'}>295</option>
          <option value={'300'}>300</option>
        </optgroup>
      </select>
    </p>
  );
}
