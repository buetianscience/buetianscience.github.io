import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useColorScheme } from '../theme/ColorSchemeProvider';

export default function ThemeToggle() {
  const { mode, toggleMode } = useColorScheme();
  
  return (
    <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
      <IconButton 
        onClick={toggleMode} 
        aria-label="Toggle color scheme"
        color="inherit"
      >
        {mode === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}

