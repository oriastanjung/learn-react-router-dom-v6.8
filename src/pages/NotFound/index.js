import React from "react";
import { useRouteError } from "react-router-dom";
function NotFound() {
  const error = useRouteError();
  console.log(error);
  return <div id="error-page">YAH ENDAK KETEMU NIII ROUTER NYA</div>;
}

export default NotFound;
