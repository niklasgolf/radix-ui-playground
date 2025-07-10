'use client';

import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
import styles from './NotMember.module.css';

export default function NotMember() {
  return (
    <Flex direction="column" align="center" justify="center" className={styles.container}>
      <Heading as="h1" size="8">Not a Member</Heading>
      <Text>This is the page for users who are not members.</Text>
    </Flex>
  );
}
