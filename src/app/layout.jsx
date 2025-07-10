'use client';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

function ThemeWrapper({ children }) {
  const { currentTheme } = useTheme();
  return (
    <Theme
      appearance={currentTheme.appearance}
      accentColor={currentTheme.accentColor}
      grayColor={currentTheme.grayColor}
    >
      {children}
    </Theme>
  );
}