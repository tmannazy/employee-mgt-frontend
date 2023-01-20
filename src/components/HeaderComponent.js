import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a
                href="https://www.github.com.tmannazy"
                className="navbar-brand"
              >
                Employee Management MiniApp
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
