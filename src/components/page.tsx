import { createStyles, Grid, Theme, withStyles, WithStyles} from '@material-ui/core'; 
import * as React from 'react';
import logo from '../assets/images/logo.png';
import HourCard from './hourCard';


const styles = (theme: Theme) =>
  createStyles({
    ['@media (max-width: 599px)']: {
      logo: {
        height: '6vh'
      }
    },
    ['@media (max-width: 959px)']: {
      logo: {
        height: '8vh'
      }
    },
    container: {
      minHeight: '100vh',
    },
    item: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    logo: {
      marginBottom: 25
    },
})

class Page extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const currentTime = new Date(); 
    return (
      <Grid 
        container={true} 
        className={this.props.classes.container} 
        justify='center'
        alignItems='center'
        direction='column'
        >
        <Grid className={this.props.classes.item} item={true} xs={12}>
          <img src={logo} className={this.props.classes.logo} alt='Akira Logo'/>
          <HourCard currentTime={currentTime}/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Page);