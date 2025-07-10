
'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button, Flex } from '@radix-ui/themes';

export default function ThemeSwitcher() {
  const { setCurrentThemeName, themes } = useTheme();

  return (
    <Flex gap="2" mt="4">
      {Object.keys(themes).map((themeName) => (
        <Button key={themeName} onClick={() => setCurrentThemeName(themeName)}>
          {themeName.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </Button>
      ))}
    </Flex>
  );
}
