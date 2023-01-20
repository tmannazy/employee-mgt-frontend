import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    // <div className="App">
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HeaderComponent />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route
              path="/add-employee/:id"
              element={<CreateEmployeeComponent />}
            />
            <Route
              path="/view-employee/:id"
              exact
              element={<ViewEmployeeComponent />}
            />
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
