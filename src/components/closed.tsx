import { createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core'; 
import * as moment from 'moment';
import * as React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: '#77bc7e',
      color: '#fff',
      height: 60,
      marginLeft: 5,
      marginRight: 15,
      width: 60,
    },
    bio: {
      color: '#68b3d8',
      textDecoration: 'none',
    },
    button: {
      background: '#68b3d8',
      color: '#fff',
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    info: {
      marginBottom: 15,
      marginRight: 10,
    },
})
export interface IProps extends WithStyles<typeof styles> {
  nextOpen : moment.Moment;
}

class Closed extends React.Component<IProps> {
  
  public render () {
    const nextOpenTime = moment(this.props.nextOpen).add(1, 'd').format('ddd h.mm a');
    return(
      <div className={this.props.classes.container}>
        <Typography variant='h6'>Sorry we are closed.</Typography>
        <Typography variant='subtitle1'>We open again on {nextOpenTime}.</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Closed);