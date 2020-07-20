import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundView from '../pages/NotFoundView';
import AppBar from './AppBar';
import Loader from './Loader';

import routes from '../routes';
import '../../node_modules/modern-normalize/modern-normalize.css';

const HomePage = lazy(() => import('../pages/HomePage.js'));
const MoviesPage = lazy(() => import('../pages/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage.js'));

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
