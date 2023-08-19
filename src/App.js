import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox"; // Örnek yol
import FormControllabel from "@material-ui/core/FormControllabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import 'fontsource-roboto'
import  Typography  from "@material-ui/core/Typography";
import { Container } from '@material-ui/core';
import Paper from "@material-ui/core/Paper"
import { Grid } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#FE6BBB,#FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadus: 25,
    color: "white",
    padding: "10 30px",
  },
});
const theme = createTheme({
  typography:{
h2:{ fontSize:35}
  }
 
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}> test Stayled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControllabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary Checkbox",
          }}
        />
      }
      label="texting Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth= "sm">
        
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6">
                 Meterial ui temaları
              </Typography>
              <Button>
                Giriş yapın
              </Button>
            </Toolbar>
          </AppBar>
          <Typography  variant="h2" component='div'>
            sayfama hoşgeldiniz
          </Typography>
          <Typography  variant="subtitlel">
            metarial arayüzünü kullanmayı deneyimleyin
          </Typography>
          <ButtonStyled />
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={3} sm={6}>
              
            <Paper style={{height:75, width:'100%'}}/>
          </Grid>
          <Grid item xs={3} sm={6}>
              
              <Paper style={{height:75, width:'100%'}}/>
            </Grid>
            <Grid item xs={3} lg={6}>
              
              <Paper style={{height:75, width:'100%'}}/>
            </Grid>
            </Grid>

          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="the time"
            placeholder="test@test.com"
          />
          <CheckBoxExample />
          <ButtonGroup>
            <Button size="large" variant="contained" color="primary">
              Save
            </Button>
            <Button startIcon={<DeleteIcon />}>Discard</Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
   
   
      </div>
      </Container>
    
    </ThemeProvider>
  );
}

export default App;
