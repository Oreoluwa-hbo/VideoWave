import React from "react";
import { Typography, AppBar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";


import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

const useStyles = makeStyles((theme) => ({
    
    appBar: {
      borderRadius: 10,
      margin: '20px auto',
      padding: '1px 2px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      maxWidth: '600px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      boxShadow: theme.shadows[3],
      

      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: '90%',
        margin: '10px auto',
        padding: '10px',
      },
    },
    
    image: {
      marginLeft: '20px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'contain',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      padding: '0 10px',    
    },

    
  }));  
    

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" style={{ backgroundColor: '#000000' }}>
                <Typography
                    variant="h2"
                    style={{
                    fontFamily: 'Times New Roman, sans-serif',
                    color: 'white', // adjust text color to ensure it's readable on dark background
                    }}
                >
                    VideoWave
                </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}

const theme = createTheme();

const WrappedApp = () => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

export default WrappedApp;