import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


const useStyles = styled((theme) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box>
        <footer className={classes.root}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Connect with Us</Typography>
            <IconButton aria-label="LinkedIn" className={classes.icon}>
                <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Twitter" className={classes.icon}>
                <TwitterIcon />
            </IconButton>
            <IconButton aria-label="GitHub" className={classes.icon}>
                <GitHubIcon />
            </IconButton>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Useful Links</Typography>
            <Link href="#" color="inherit" underline="hover">About Us</Link>
            <Link href="#" color="inherit" underline="hover">Services</Link>
            <Link href="#" color="inherit" underline="hover">Portfolio</Link>
            <Link href="#" color="inherit" underline="hover">Contact</Link>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Newsletter</Typography>
            <Typography variant="body2">Subscribe to our newsletter to receive updates and offers!</Typography>
            
            </Grid>
        </Grid>
        <Typography variant="body2" align="center" marginTop={2}>
            &copy; {new Date().getFullYear()} WebWizards Studios. All rights reserved.
        </Typography>
        </footer>
    </Box>
  );
};

export default Footer;
