import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
      color: '#ff008a',
      fontSize: '8vh',
      width: '4vw',
      backgroundColor: '#97e7ff',
      position: 'relative',
      alignContent: 'flex-end',
      borderRadius: '10px',
      margin: '0',
      left: '7px',
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function LeftArrowIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ArrowLeftIcon />
    </div>
  );
}

