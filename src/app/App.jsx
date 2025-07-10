
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Flex, Text } from '@radix-ui/themes';
import ThemeSwitcher from '../components/ThemeSwitcher';
import styles from './App.module.css';

export default function App() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <Text size="8" className={styles.welcomeText}>Welcome to our page!</Text>
      <Flex gap="3" justify="center">
        <Button className={styles.primaryButton} onClick={() => router.push('/home')}>Login</Button>
        <Button className={styles.secondaryButton} onClick={() => router.push('/notmember')}>Not a member</Button>
      </Flex>
      <ThemeSwitcher />
    </div>
  );
}
