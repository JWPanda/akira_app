import { createStyles, Grid, Paper, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import axios from 'axios';
import * as moment from 'moment';
import * as React from 'react';
import Closed from './closed';
import ConsultantAvatar from './consultant';


const styles = (theme: Theme) =>
  createStyles({
    hours: {
      color: '#77bc7e',
    },
    item: {
      minWidth: '100%',
    },
    paper: {
      margin: 25,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
    },
})
export interface IProps extends WithStyles<typeof styles> {
  currentTime : Date;
}

interface IState {
  systemTime: Date;
  openNow: boolean;
  openTwentyFour: boolean;
  hoursTodayOpen?: Date,
  hoursTodayClose?: Date,
}

class HourCard extends React.Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openNow: false,
      openTwentyFour: false,
      systemTime: props.currentTime,
    }
  }

  public componentDidMount() {
    axios.get("https://app.akira.md/api/system_status")
      .then((response) => {
        this.setState
        ({
          hoursTodayClose: response.data.open_hours_today.close_at,
          hoursTodayOpen: response.data.open_hours_today.open_at,
          openNow: response.data.is_open_for_business,
          openTwentyFour: response.data.is_open_24h_today,
        })
      })
      .catch((Error) => {
        if(Error.response)  {
          // server erorraasdfasdfsadf which is outside of 2XX range
          console.log(Error.response.data);
          console.log(Error.response.status);
          console.log(Error.response.headers);
        }
        else if (Error.request){
          // request made, but no response received
          console.log(Error.request);
        }
        else {
          // something went wrong with setting up the request
          console.log("Error, it's broken Jim" , Error.message);
        }
        console.log(Error.config);
      });
  }

  public render() {
    const open = this.state.hoursTodayOpen;
    const close = this.state.hoursTodayClose;
    const openTime = moment(open).format('h:mm a');
    const closeTime = moment(close).format('h:mm a');
    const nextOpen = moment(open);
    return (
      <Grid
        container={true}
        justify='center'
        >
        <Grid
          item={true}
          xs={12}
          md={8}
          xl={4}
          className={this.props.classes.item}
          >
          {
            this.state.openNow  &&
            (
              <Typography
                align='center'
                variant='subheading'
                >
                <b>On Site Now</b>
                { this.state.openTwentyFour ?
                  (<span className={this.props.classes.hours}> Open 24h</span>):
                  (<span className={this.props.classes.hours}> {openTime} - {closeTime}</span>)
                }
              </Typography>
            )
          }
          <Paper className={this.props.classes.paper}>
            {this.state.openNow ?
              (<ConsultantAvatar/>) : (<Closed nextOpen={nextOpen}/>)
            }
         </Paper>
        </Grid>
      </Grid>

    )
  }
}

export default withStyles(styles)(HourCard);