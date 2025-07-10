
'use client';

import React from 'react';
import styles from './NotMember.module.css';

export default function NotMember() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Not a Member</h1>
      <p>This is the page for users who are not members.</p>
    </div>
  );
}
