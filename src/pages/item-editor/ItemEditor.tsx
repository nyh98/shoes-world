import React, { useState } from 'react';
import styles from './ItemEditor.module.css';
import { Item, UploadItem } from '../../types/types';
import {
  addFileToStorage,
  addNewItme,
  addToAllItems,
  getImgUrl,
} from '../../backEnd/fireBase';
import { v4 as uuidv4 } from 'uuid';
import { json } from 'stream/consumers';

export default function ItemEditor() {
  const [uploadItem, setUploadItem] = useState<UploadItem>({
    file: null,
    itemName: '',
    brandName: '',
    price: '',
    size: [],
  });
  console.log('upload', uploadItem);

  return (
    <>
      <p className={styles.header}>새로운 제품 등록</p>
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
      <p>
        상품명
        <input
          type="text"
          value={uploadItem.itemName}
          onChange={e => {
            setUploadItem(prev => ({ ...prev, itemName: e.target.value }));
          }}
        />
      </p>
      <p>
        브랜드명
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
      <p>
        가격{' '}
        <input
          type="number"
          onChange={e =>
            setUploadItem(prev => ({ ...prev, price: e.target.value }))
          }
        />
      </p>
      <p>
        사이즈 {uploadItem.size.map(size => `${size}, `)}
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
      <button
        onClick={async e => {
          //제품 정보 검사
          for (let attribute in uploadItem) {
            if (!uploadItem[attribute]) {
              alert('누락된 제품 정보가 있습니다');
              return;
            }
          }
          //사이즈 값이 있는지 검사
          if (!uploadItem.size[0]) {
            alert('사이즈를 지정해주세요');
            return;
          }

          if (uploadItem.file) {
            await addFileToStorage(uploadItem.file.name, uploadItem.file);
            await getImgUrl(uploadItem.file.name).then(async url => {
              const item: Item = {
                brandName: uploadItem.brandName,
                imgUrl: url ? url : '',
                itemId: uuidv4(),
                itemName: uploadItem.itemName,
                price: uploadItem.price,
                size: uploadItem.size.sort((a, b) => Number(a) - Number(b)),
              };
              await addNewItme('items', uploadItem.brandName, item);
              await addToAllItems('items', 'specific', item);
              alert('제품 등록 완료');
            });
          }
        }}
      >
        등록 하기
      </button>
    </>
  );
}
