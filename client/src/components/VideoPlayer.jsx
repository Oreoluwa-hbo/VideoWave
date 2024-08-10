import React, { useContext } from 'react';
import {Grid, Typography, Paper} from '@mui/material';
import { makeStyles } from "@mui/styles";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      height: '100%', 
      [theme.breakpoints.down('xs')]: {
        width: '305px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: 0,
      margin: 0, 
      border: '5px solid black',
      overflow: 'hidden',
    },
  }));
  
  const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
  
    return (
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <div style={{ position: 'relative', display: 'inline-block', height: '100%' }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                  }}
                >
                  {name || 'Name'}
                </Typography>
                <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
              </div>
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <div style={{ position: 'relative', display: 'inline-block', height: '100%' }}> {/* Add height: '100%' */}
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                  }}
                >
                  {call.name || 'Name'}
                </Typography>
                <video playsInline ref={userVideo} autoPlay className={classes.video} />
              </div>
            </Grid>
          </Paper>
        )}
      </Grid>
    );
  };

export default VideoPlayer;