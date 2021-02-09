import React, { Component, Fragment } from 'react';

class Setting extends Component {
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
                <a className="nav-link" href="payment"><img src="assets/img/payment.png" /> Payment </a>
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
    <div className="col-md-9 p-0 m-0">
      <div className="basic-info">
        <div className="d-flex basic-info-h ">
          <h5 className="pr-3"> Basic Info</h5>
          <div className>
            <button className="protect-btn"><i className="bx bx-check-shield" /> Protecting Personal Information <i className="bx bxs-chevron-right" /></button></div>
        </div>
        <div className="d-flex align-items-center basic-text-info">
          <div className="text-span-circle">
            AA
          </div>
          <div className="crito-heading border-0 w-100">
            <h3 className="m-0"><label>Atul Awasthi</label>  <label className="user-id"> User ID: 44305385 </label> <label className="vp-veryfy-text"><i className="bx bx-diamond" /> VIP0 </label> <span>Maker: 0.075% Taker: 0.075% <a className="text-anker">Learn more</a></span> </h3>
            <div className="last-login-text"><label> Last login time 2020-08-08 06:26:16</label> &nbsp;&nbsp;&nbsp; <label> IP: 162.120.200.51</label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="identity-1 p-2 mr-1">
            <div className="d-flex justify-content-between identity-text botm-line">
              <h4>Identity Verification </h4>     <h5> Switch to Enterprise account <i className="bx bxs-chevron-right-circle" /></h5>
            </div>
            <p className="mb-0">Personal details</p>
            <h6>Why verify your identity?</h6>
            <div className="list-line">
              <ul style={{padding: '0px 24px'}}>
                <li>
                  To increase your withdrawal limit to 100 BTC</li>
                <li>
                  To increase deposit limits for selected local currencies</li>
              </ul>
              <a href="#" className="Verified btn-cv-fg-text">Verify </a>
            </div>
          </div>
          <div className="identity-2 p-2 mr-1">
            <div className="d-flex justify-content-between identity-text botm-line">
              <h4>Address verification</h4>    
            </div>
            <h6 className="mt-2">Why include your residential address?
            </h6>
            <div className="list-line">
              <ul style={{padding: '0px 24px'}}>
                <li>
                  Further increase deposit limits for some fiat channels</li>
              </ul>
              <a href="#" className="btn-cv-fg-text-blue-btn">Verify </a>
            </div>
          </div>
          <div className="identity-3 p-2 ">
            <div className="d-flex justify-content-between identity-text botm-line">
              <h4>Withdrawal Limits </h4>    
            </div>
            <h6 className="mt-2">2BTC</h6>
            <div className="list-line">
              <ul style={{padding: '0px 24px'}}>
                <li>
                  Withdraw up to 2 BTC within 24 hours</li>
              </ul>
              <a href="#" className="btn-cv-fg-text-blue-btn">Upgrade to higher limit </a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br /><br />
      <br /><br />
      <br /><br />
      <br /><br /><br />

    </div>
  </div>
</>

      </Fragment>
    );
  }
}

export default Setting;