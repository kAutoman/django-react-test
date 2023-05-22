/*****************************************************************************/
/*!
\file App.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import './Global.css'
import 'react-image-lightbox/style.css';
//store all pages
import Profile from './Pages/Profile';
import Landing from './Pages/Landing';
import Features from './Pages/Features';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Contact from './Pages/Contact';
import WithLayout from './WithLayout';
// Available layouts
import
{
  Main as MainLayout,
  Profile as ProfileLayout
} from './layouts';

const App = () =>
{
  return (

    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={((matchProps) => (
            <WithLayout
              {...matchProps}
              component={Login}
              layout={MainLayout}
            />
          ))()}
        />
         <Route
          exact
          path="/signup"
          element={((matchProps) => (
            <WithLayout
              {...matchProps}
              component={SignUp}
              layout={MainLayout}
            />
          ))()}
        />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
