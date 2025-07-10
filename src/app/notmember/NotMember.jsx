'use client';

import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
import styles from './NotMember.module.css';

export default function NotMember() {
  return (
    <div className={styles.wrapper}>
      <Heading as="h1" size="8" className={styles.heading}>Not a Member</Heading>
      <Text className={styles.text}>This is the page for users who are not members.</Text>
    </div>
  );
}