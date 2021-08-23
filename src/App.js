import React from "react";
import "./App.css";

// import Entry from "./pages/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
// import Dashboard from "./pages/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";

function App() {
  return (
    <div>
      <DefaultLayout>
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
