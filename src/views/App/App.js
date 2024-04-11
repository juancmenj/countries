import * as React from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
//router
import Router from "../../routers/allRoutes";

const RouterOutlet = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(0),
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(0),
  paddingTop: theme.spacing(0),
  paddingRight: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  paddingLeft: theme.spacing(0),
  minHeight: '100vh !important',
  //background: `rgba(250, 250, 250,1)`,
  backgroundAttachment: 'fixed',
  backgroundImage: 'linear-gradient(180deg, rgba(211, 211, 211,0.1) 80%, #fff)',
    //linearGradient(70deg, rgba(240, 246, 252,0) 32%, #fff) !important
}));

export default function App() {

  function renderApp() {
    return (
      <RouterOutlet>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </RouterOutlet>
    );
  }

  return renderApp();
}