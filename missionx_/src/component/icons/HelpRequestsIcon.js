import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(0),
      fontSize: '3.5vh',
      width: '3.5vw'
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

export default function HelpRequestIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LiveHelpIcon />
    </div>
  );
}