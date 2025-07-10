'use client';

import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" style={{ height: '100vh' }}>
      <Heading as="h1" size="8">Home Page</Heading>
      <Text>Welcome to the home page!</Text>
    </Flex>
  );
}