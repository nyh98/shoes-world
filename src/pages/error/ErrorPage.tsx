import React from 'react';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <p>죄송합니다. 예기치 않은 오류가 발생했습니다. 관리자에게 문의하세요.</p>
      <p>
        Sorry, an unexpected error occurred. Please contact the administrator
        for assistance.
      </p>
    </div>
  );
}
