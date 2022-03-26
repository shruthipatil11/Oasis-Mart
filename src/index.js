import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom';
import {ServerDataContext,CartAndWishlistProvider} from './components';

<link
  rel="stylesheet"
  href="https://unpkg.com/mockman-js@latest/dist/style.css"
/>
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <CartAndWishlistProvider>
     <ServerDataContext>       
       <App />
        </ServerDataContext>
      </CartAndWishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
