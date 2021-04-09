import { Accordion, AccordionDetails, AccordionSummary, Container, createMuiTheme, List, ListItem, ListItemText, ThemeProvider, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { Route } from './types';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [routes, setRoutes] = useState<Route[]>([]);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    (async () => {
      try {

        const response = await fetch(`${API_URL}/routes`);
        const data = await response.json();
        setRoutes(data);
      } catch (err) {
        console.error(err);
        setRoutes([]);
      }
    })();
  }, []);

  return (
    <>
    <ThemeProvider theme={theme}>
    <Container>
    <h1>Routes</h1>
      {routes.map((route) => (
        <Accordion expanded={true} key={route.title}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{route.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
          <ListItem>
                  <ListItemText
                    primary={`[lat: ${route.startPosition.latitude}, lng: ${route.startPosition.longitude}]`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`[lat: ${route.endPosition.latitude}, lng: ${route.endPosition.longitude}]`}
                  />
                </ListItem>
        </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
