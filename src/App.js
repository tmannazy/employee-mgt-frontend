// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  // <div className="App">
  return (
    <div className="App">
      <HeaderComponent />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<ListUserComponent />} />
            <Route path="/employees" element={<ListUserComponent />} />
            <Route
              path="/add-employee/:id"
              element={<CreateEmployeeComponent id={`:id`} />}
            />
            <Route
              path="/view-employee/:id"
              exact
              element={<ViewEmployeeComponent id={`:id`} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
