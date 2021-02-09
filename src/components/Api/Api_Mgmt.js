import React, { Component, Fragment } from 'react';

class Api_Mgmt extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="history-by"> 
  </section>{/* End Hero */}
  <div className="row p-0 m-0">
    <div className="col-md-3">
      <div className="side-bar">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top-1 ">
          <div className="collapse navbar-collapse side-drop-nav " id="navbarCollapse">
            <ul className="navbar-nav mr-auto sidenav" id="navAccordion">
              <li className="nav-item">
                <a className="nav-link active-btn" href="dashbord"><img src="assets/img/bxs-dashboard.svg" width={30} /> Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><img src="assets/img/bx-wallet.svg" width={30} /> Multi-sign Wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><img src="assets/img/sell.png" /> Buy/Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><img src="assets/img/payment.png" /> Payment </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="security"><img src="assets/img/lock.png" /> Security </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><img src="assets/img/trophy.png" /> Reward Center </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="task-center"><img src="assets/img/list.png" /> Task Center </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems5" aria-controls="collapseSubItems4" aria-expanded="false"><img src="assets/img/adjust.png" /> Settings</a>
                <ul className="nav-second-level collapse" id="collapseSubItems5" data-parent="#navAccordion">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Item 4.1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Item 4.2</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Item 4.2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><img src="assets/img/referral.png" /> Referral </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div className="col-md-9">
      <div className="crito-heading">
        <h3> Preferences
        </h3>
      </div>
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="rav-info-fg">
            <div className="box-tag d-flex align-items-center pt-2 " style={{}}> 
              <div>
                <h3>Create API</h3>
              </div>
              <div className=" ml-auto">
                View API documentation &gt;
              </div>
            </div>
            <div className="text-creat">Creating an API private key provides access to markets and real-time trading services on Binance via a third-party site or application.</div>
            <div className="api-key-label d-flex justify-content-center mt-5 mb-4">
              <input type="text" placeholder="Give the API key a label" className="api-key" name />
            </div>
            <div className="d-flex align-items-center justify-content-center"><a href="#" className="Verified btn-cv-xc mt-3 mb-4">Create</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</>

      </Fragment>
    );
  }
}

export default Api_Mgmt;