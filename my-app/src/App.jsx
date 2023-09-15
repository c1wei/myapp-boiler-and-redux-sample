import {
  Box,
  // Button,
  // TextField,
  CssBaseline,
  // Button,
  ThemeProvider,
} from '@mui/material';

import React, {
  Suspense,
} from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

import theme from './theme';

// import HomePage from './components/pages/HomePage';
import * as routes from './routePaths';

import Loading from './components/pages/Loading';

const HomePage = React.lazy(() => import('./components/pages/HomePage'));

// const HomePage = React.lazy(() => import('./components/pages/HomePage'));

function App() {
  console.debug('this is routes: ', routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          oveflow: 'hidden',
        }}
      >
        {/* <HomePage /> */}
        <Suspense>
          <Routes>
            <Route
              path={routes.getLoadingRoute()}
              element={(
                <Suspense fallback={<Loading />}>
                  <Loading />
                </Suspense>
            )}
            />
            <Route
              path={routes.getInitRoute()}
              element={(
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
            )}
            />
          </Routes>
        </Suspense>
      </Box>
    </ThemeProvider>

  );
}

export default App;
