import './styles.js';
import { Typography, Link, AppBar, Toolbar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Button } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import useStyles from './styles';

function App() {


  const cards = [1, 2, 3, 4, , 6, 7, 8, 9];

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar >
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align='center' color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color='primary'>
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGird} maxWidth="md">
            <Grid container spacing={4}>
              {
                cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="image"
                        alt="iamge"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                          Heading
                        </Typography>
                        <Typography >
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </CardContent >
                      <CardActions>
                        <Button
                          color="primary"
                          size="small"
                        >
                          View
                        </Button>
                        <Button
                          color="primary"
                          size="small"
                        >
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          </Container>

        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align='center' gutterBottom>
          Something here to give the footer a purpose!
        </Typography>
        <Typography align='center' color="textSecondary" gutterBottom>
          Copyright ©{' '}
          <Link href="#" color="textSecondary">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}{'.'}
        </Typography>
      </footer>
    </>
  );
}

export default App;
