import React from "react";
import { join } from "path";
import {
  registerApp,
  App,
  Static,
  Router,
  Get,
  Post,
  Res,
  Logger,
} from "@reactend/express";

import { HomePage } from "./pages/HomePage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { Updates } from "./components/Updates";

const isProd = process.env.NODE_ENV === "production";

const ExpressApp = () => (
  <App port={process.env.PORT || 3000}>
    <Static publicPath={join(__dirname, "/../public")} />
    <Logger mode="dev" disabled={isProd} />
    <Router path="/">
      <Get>
        <Res.Header name="Cache-Control" value="public, max-age=31557600" />
        <Res.Render component={HomePage} />
      </Get>
      <Get path="/components" render={ComponentsPage} />
      <Router path="/api">
        <Post path="/status" json={{ msg: "It is okay, bro" }} />
      </Router>
      <Updates />
      <Get path="*" text="Not Found" status={404} />
    </Router>
  </App>
);

registerApp(ExpressApp);
