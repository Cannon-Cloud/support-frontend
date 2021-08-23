import React from "react";
import "./App.css";

import Entry from "./pages/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
