import React, { useContext, useState } from 'react';
import styles from './ItemEditor.module.css';
import { Item, UploadItem } from '../../types/types';
import {
  addFileToStorage,
  addNewItmeToBrand,
  addToAllItems,
  getImgUrl,
} from '../../backEnd/fireBase';
import { v4 as uuidv4 } from 'uuid';
import InputFile from '../../components/main/add-item/InputFile';
import InputItemName from '../../components/main/add-item/InputItemName';
import InputBrandName from '../../components/main/add-item/InputBrandName';
import InputPrice from '../../components/main/add-item/InputPrice';
import InputSize from '../../components/main/add-item/InputSize';
import { loginState } from '../../context/LoginContext';
import { Navigate } from 'react-router-dom';

export default function ItemEditor() {
  const { isLogin } = useContext(loginState);
  const [uploadItem, setUploadItem] = useState<UploadItem>({
    file: null,
    itemName: '',
    brandName: '',
    price: '',
    size: [],
  });

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.currentTarget.disabled = true;
    //제품 정보 검사
    for (let attribute in uploadItem) {
      if (!uploadItem[attribute]) {
        alert('누락된 제품 정보가 있습니다');
        e.currentTarget.disabled = false;
        return;
      }
    }
    //사이즈 값이 있는지 검사
    if (!uploadItem.size[0]) {
      alert('사이즈를 지정해주세요');
      e.currentTarget.disabled = false;
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
        await addNewItmeToBrand(uploadItem.brandName, item);
        await addToAllItems(item);
        alert('제품 등록 완료');
        window.location.reload();
      });
    }
  };

  if (!isLogin?.admin) return <Navigate to={'/'} />;

  return (
    <>
      <p className={styles.header}>새로운 제품 등록</p>
      <InputFile uploadItem={uploadItem} setUploadItem={setUploadItem} />
      <InputItemName setUploadItem={setUploadItem} />
      <InputBrandName setUploadItem={setUploadItem} />
      <InputPrice setUploadItem={setUploadItem} />
      <InputSize uploadItem={uploadItem} setUploadItem={setUploadItem} />
      <button onClick={submitHandler}>등록 하기</button>
    </>
  );
}
