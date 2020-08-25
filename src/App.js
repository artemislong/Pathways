import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//styling
import './App.css';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { stylingObject, theme } from "./style/general";
//component
import Main from './pages/Main';
import NavBar from './pages/components/NavBar';
import BottomNav from './pages/components/BottomNav';

//context
import ClassesContext from './context/classesContext';
import Welcome from './pages/Welcome';


//-------styling hooks------
const useStyles = makeStyles(stylingObject);

//-------app function--------
function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ClassesContext.Provider value={classes}>
        <NavBar />
        <Switch>

          <Route path="/home" render={({ location }) => (<Main location={location} />)} />
          <Route path="/login" render={({ location }) => (<Welcome location={location} />)} />
          <Redirect from="*" to="/home" />
        </Switch>
      </ClassesContext.Provider>
    </ThemeProvider>
  );
}

export default App;