import React from "react";
import { Provider } from "mobx-react";

import App from "./src/navigation/navigation";
import Root from "./src/mobx/Root";

export default function RootApp() {
  return (
    <Provider root={Root}>
      <App />
    </Provider>
  );
}
