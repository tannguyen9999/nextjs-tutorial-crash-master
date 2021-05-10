import {Typography,AppBar,Container,Toolbar} from '@material-ui/core';


export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar style={{height:'200px'}}>
              <Typography variant="body1" color="inherit">
                © 2021 Love Frontend Dev
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

