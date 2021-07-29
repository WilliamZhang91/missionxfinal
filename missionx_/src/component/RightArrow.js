import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(1),
      color: '#ff008a',
      fontSize: '8vh',
      width: '4vw',
      backgroundColor: '#97e7ff',
      borderRadius: '10px',
      alignItems: 'end',
      margin: '0',
      position: 'relative',
      right: '7px',
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

export default function RightArrowIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ArrowRightIcon />
    </div>
  );
}
