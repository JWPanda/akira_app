import { Grid } from '@material-ui/core';
import * as React from 'react';
import Page from './components/page';
import PageContainer from './components/pageContainer';



class App extends React.Component {
  public render() {
    return (
      <div>
        <Grid container={true}>
          <Grid item={true} xs={12}>
            <PageContainer>
              <Page/>
            </PageContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
} 

export default App;
