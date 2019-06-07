import React from "react";
import styled, { css } from "styled-components";

import Welcome from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import "./App.css";

function App() {
  return (
    <AppLayout>
      <Welcome />
    </AppLayout>
  );
}

export default App;
