'use client';

import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Heading as="h1" size="8" className={styles.heading}>Home Page</Heading>
      <Text className={styles.text}>Welcome to the home page!</Text>
    </div>
  );
}