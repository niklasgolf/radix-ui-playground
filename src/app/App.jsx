
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './App.module.css';

export default function App() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.centeredDiv}>
          <h1>Welcome to our page!</h1>
          <button className={styles.button} onClick={() => router.push('/home')}>Login</button>
          <button className={styles.button} onClick={() => router.push('/notmember')}>Not a member</button>
        </div>
      </main>
    </div>
  );
}
