import React, { Component, Fragment } from 'react';

class Acc_Side extends Component {
  render() {
    return (
      <Fragment>
            <div className="col-md-3 p-0">
      <div className="side-bar">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top-1 ">
          <div className="collapse navbar-collapse side-drop-nav " id="navbarCollapse">
            <ul className="navbar-nav mr-auto sidenav pt-4" id="navAccordion">
              <li className="nav-item">
                <a className="nav-link active-btn" href="dashbord">Accounts Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/spot_acc"> Spot Account </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Margin Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Futures Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> P2P Account </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/saving_acc"> Savings Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pool_acc"> Pool Account </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/transaction_history">Transaction History</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
      </Fragment>
    );
  }
}

export default Acc_Side;