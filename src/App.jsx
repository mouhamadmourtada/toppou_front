import React from "react";

// import AuthProvider from "./provider/authProvider";
import {AuthProvider} from "./provider/authProvider";
import Routes from "./routes/index";
import { SidebarProvider } from './context/SidebarContext'


function App() {
  return (
    <AuthProvider>
  <SidebarProvider>
      <div>
        <Routes />

      </div>
      </SidebarProvider>
   </AuthProvider>
  );
}

export default App;