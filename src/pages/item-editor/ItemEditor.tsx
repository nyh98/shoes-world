import React from 'react';
import styles from './ItemEditor.module.css';

export default function ItemEditor() {
  return (
    <>
      <p className={styles.header}>새로운 제품 등록</p>
      <input type="file" />
      <p>상품명(이미지 이름과 동일하게)</p>
      <p>브랜드명</p>
      <p>가격</p>
      <p>사이즈</p>
    </>
  );
}
