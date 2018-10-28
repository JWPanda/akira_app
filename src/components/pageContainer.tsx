import { Grid } from '@material-ui/core'; 
import * as React from 'react';

class PageContainer extends React.Component {
  public render() {
    return (
      <Grid container={true} direction='column' justify='center'>
        <Grid item={true} xs={12}> 
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

export default PageContainer;