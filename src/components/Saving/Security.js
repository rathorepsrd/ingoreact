import React, { Component, Fragment } from 'react';

class Security extends Component {
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
    <div className="col-md-9">
      <div className="crito-heading">
        <h3> Increase your account security (1/4)
        </h3>
        <div className="d-flex flex-wrap ">
          <div className="icn-0"><i className="bx bxs-check-circle" /> <a href="#"> Enable 2FA</a></div>
          <div className="icn-1"><i className="bx bxs-message-rounded-x" /> <a href="#">Verify</a></div>
          <div className="icn-1"><i className="bx bxs-message-rounded-x" /><a href="#"> Enable Anti-phishing Code</a> </div>
          <div className="icn-1"><i className="bx bxs-message-rounded-x" /> <a href="#">Turn-on withdrawal whitelist</a></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="rav-info">
            <div className="d-flex align-items-end">
              <div className="box-2fa">
                <h5 className="mt-3">2FA </h5>
                <h5 className> Security Key <small>Recommend: YubiKey</small></h5>
                <a href="#" style={{textDecoration: 'underline', color: '#000'}}>What is a Security Key?</a>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className=" werhro">
                  <small>Protected Actions</small>
                  <h3>Withdraw &amp; API </h3>
                </div>
                <div className="ml-auto">
                  <label className="switch-h">
                    <input type="checkbox" defaultChecked />
                    <span className="slider-h round" />
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="werhro">
                  <h3>Login </h3>
                </div>
                <div className="ml-auto">
                  <label className="switch-h">
                    <input type="checkbox" defaultChecked />
                    <span className="slider-h round" />
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className=" werhro">
                  <h3>Reset Password </h3>
                </div>
                <div className="ml-auto">
                  <label className="switch-h">
                    <input type="checkbox" defaultChecked />
                    <span className="slider-h round" />
                  </label>
                </div>
              </div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3> Google Authentication</h3>
                <p> Used for withdrawals and security modifications</p>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>SMS Authentication</h3>
                <p> Used for withdrawals and security modifications</p>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3> E-mail verification</h3>
                <p> Used for withdrawals and security modifications</p>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div></div>
          <div className="management-box">
            <div className="box-tag-1 d-flex align-items-center">
              <div>
                <h3> Device Management</h3>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
          </div>
          <div className="management-box mt-2 mb-2">
            <div className="box-tag-1 d-flex align-items-center">
              <div>
                <h3> Login Password</h3>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="rav-info">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between align-items-center mt-4">
              </div>
            </div>
            <div className="box-tag d-flex align-items-center mb-3">
              <div>
                <h3>Identity Verification</h3>
                <p> </p>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Address Management</h3>
                <p style={{color: '#ccc', fontSize: 13, lineHeight: 18}}>Address Management allows you to save and write memos for each of your withdrawal addresses. The optional Whitelist function helps protect your funds by only allowing withdrawals to whitelisted addresses.
                </p>
                <a href="#" style={{color: '#ccc'}}> Whitelist Off</a> <label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Anti-phishing Code</h3>
                <p style={{color: '#ccc', fontSize: 13, lineHeight: 18}}>By setting up an Anti-Phishing Code, you will be able to tell if your notification emails are coming from Binance or phishing attempts.
                </p>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Account Activity</h3>
                <p style={{color: '#ccc', fontSize: 13, lineHeight: 18}}>Last login:2020-08-08 02:09:47
                  Suspicious account activity?
                </p>
                <a href="#"> Disable account </a>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">Deposit</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
      </Fragment>
    );
  }
}

export default Security;