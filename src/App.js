import React from 'react';
import { Page, Site } from "tabler-react";

import "tabler-react/dist/Tabler.css";
import './App.css';
import SiteHeader from './SiteHeader';
import LogOutBtn from './LogOutBtn';
import Forum from './Forum.js'
import SiteFooter from './SiteFooter';

function App() { 
  return (
    <div className="App">
      <Page>
        <Page.Main>
          <SiteHeader/>
          <Site.Nav>
            <div className="site-nav">           
              <LogOutBtn />            
            </div>
          </Site.Nav>
          <div className="my-3 my-md-5">
           <Forum />
          </div>
          <SiteFooter />
        </Page.Main>
      </Page>
    </div>
  );
}
export default App;