'use client';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
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