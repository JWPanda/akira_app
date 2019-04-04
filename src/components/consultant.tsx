import { Avatar, Button,createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
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
    caption: {
      marginBottom: 10,
    },
    consultant: {
      display: 'flex',
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

class ConsultantAvatar extends React.Component<WithStyles<typeof styles>> {
  public render () {
    return(
      <div className={this.props.classes.container}>
        <div className={this.props.classes.consultant}>
          <Avatar className={this.props.classes.avatar} alt='Consultant Profile Image'>A</Avatar>
          <div className={this.props.classes.info}>
            <Typography variant='title'>April Bakoaskdlfjsadkl;fjkl;saasdfsadfasdfasdfsadfasdfsdafsafdjfklasjl;fksjadnyi, NP</Typography>
            <Typography variant='caption' className={this.props.classes.caption}>Nurse Pasfaasdfasdfsadfdsfsdafasdfdsafdsafsdafasdfssfsafasfsfractitioner</Typography>
            <a href="#" className={this.props.classes.bio}>SEE PROFILE</a>
          </div>
        </div>
        <Button className={this.props.classes.button} variant='contained' fullWidth={true}>Start a asdfasdfasdfasfdconsult</Button>
      </div>
    )
  }
}

export default withStyles(styles)(ConsultantAvatar);