'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Flex, Text } from '@radix-ui/themes';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function App() {
  const router = useRouter();

  return (
    <Flex direction="column" align="center" justify="center" style={{ minHeight: '100vh', gap: '16px' }}>
      <Text size="8">Welcome to our page!</Text>
      <Flex gap="3">
        <Button onClick={() => router.push('/home')}>Login</Button>
        <Button onClick={() => router.push('/notmember')}>Not a member</Button>
      </Flex>
      <ThemeSwitcher />
    </Flex>
  );
}