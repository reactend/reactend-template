import React from "react";
import { Get, Res, Post } from "@reactend/express";
import { resolve } from "path";

export const Updates = () => (
  <>
    <Get path="/redirect">
      <Res.Redirect statusCode={301} path="https://ru.reactjs.org" />
    </Get>
    <Post path="/json">
      <Res.Status statusCode={401} />
      <Res.Content json={{ msg: "No Access" }} contentType="application/json" />
    </Post>
    <Get path="/send-file">
      <Res.SendFile
        path={resolve("public/code-example.png")}
        onError={console.log}
      />
    </Get>
    <Get path="/render">
      <Res.Render component={() => <h1>Shut Up And Take My Money!</h1>} />
    </Get>
  </>
);
