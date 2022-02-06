import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Login from "./Components/Login";

function App() {
  const user = "toufiq";
  return (
    <div className="app">
      {/* Header */}

      {!user ? (
        // <Login />
        <h1>Login</h1>
      ) : (
        <>
          <Header />

          <div className="app__body">
            {/* sidebar */}
            <Sidebar />
            {/* feed */}
            <Feed />
            {/* widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
