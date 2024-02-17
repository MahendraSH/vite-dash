import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from "./app/store.js";
import "./index.css";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ScrollTop from "./hooks/scroll-to-top";
import CustomThemeProvider from "./theme/custom-theme-provider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CustomThemeProvider>
          <SimpleBar>
            <ScrollTop>
              <App />
            </ScrollTop>
          </SimpleBar>
        </CustomThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
