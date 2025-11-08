import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { labelKey: 'nav.home', href: '#home' },
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.courses', href: '#courses' },
  { labelKey: 'nav.testimonials', href: '#testimonials' },
  { labelKey: 'nav.contact', href: '#contact' },
  { labelKey: 'nav.faq', href: '#faq' },
  { labelKey: 'nav.blog', href: '#blog' },
];

export default function Header() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set focus for accessibility
      const heading = element.querySelector('h1, h2, h3');
      if (heading instanceof HTMLElement) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        {t('brand')}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleNavClick(item.href)}
            >
              <ListItemText primary={t(item.labelKey)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ py: 2 }}>
        <LanguageSwitcher />
        <ThemeToggle />
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            sx={{
              flexGrow: isMobile ? 1 : 0,
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
              mr: 4,
            }}
          >
            {t('brand')}
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    {t(item.labelKey)}
                  </Button>
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                <LanguageSwitcher />
                <ThemeToggle />
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

