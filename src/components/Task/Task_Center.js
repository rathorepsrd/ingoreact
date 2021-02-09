import React, { Component, Fragment } from 'react';

class Task_Center extends Component {
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
      <div className="crito-heading bg-creto ">
        <h3> Task Center</h3>
        <div className="d-flex flex-wrap ">
          <a href="#" className="Verified btn-cv-task mr-2">Beginner tasks</a>
          <a href="#" className="Verified btn-cv-task-grey">Regular tasks</a>
        </div>
      </div>
      <div className="col-md-12 p-0 m-auto">
        <div className="task-bar">
          <h5>Completed Tasks (1/6) </h5>
          <div className="progress">
            <div className="one primary-color" /><div className="two primary-color" /><div className="three no-color" />
            <div className="progress-bar" style={{width: '50%'}} />
          </div>
          <small>Complete beginner tasks to get a beginner gift pack</small>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="management-box-bit-border mt-2">
            <div className="management-box-bit">
              <div className="box-tag-1 border-0 d-flex align-items-center">
                <img src="assets/img/secur1.png" className="mr-2 ml-2 mt-2 mb-4" />
                <div>
                  <h3 className> Beginner Gift Pack<br />
                    <small>Complete personal identity verification</small></h3>
                </div>
                <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg mr-2">Complete</a></div>
              </div>
            </div>
          </div>
          <div className="management-box-bit-border-2 mt-2">
            <div className="management-box-bit-2">
              <div className="box-tag-1 border-0 d-flex align-items-center">
                <img src="assets/img/secur2.png" width={40} className="mr-2 ml-2 mt-2 mb-4" />
                <div>
                  <h3 className> Read any piece of news
                    <br />
                    <small>Learn more about industry trends</small></h3>
                </div>
                <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg mr-2">Complete</a></div>
              </div>
            </div>
          </div>
          <div className="management-box-bit-border-3 mt-2">
            <div className="management-box-bit-3">
              <div className="box-tag-1 border-0 d-flex align-items-center">
                <img src="assets/img/secur3.png" width={40} className="mr-2 ml-2 mt-2 mb-4" />
                <div>
                  <h3 className>Complete any spot trade
                    <br />
                    <small>Make a trade using any currency pair</small></h3>
                </div>
                <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg mr-2">Complete</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="management-box-bit-border mt-2">
            <div className="management-box-bit">
              <div className="box-tag-1 border-0 d-flex align-items-center">
                <img src="assets/img/secur1.png" className="mr-2 ml-2 mt-2 mb-4" />
                <div>
                  <h3 className> Watch a beginner tutorial
                    <br />
                    <small>Learn how to buy digital currency</small></h3>
                </div>
                <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg mr-2">Complete</a></div>
              </div>
            </div>
          </div>
          <div className="management-box-bit-border-2 mt-2">
            <div className="management-box-bit-2">
              <div className="box-tag-1 border-0 d-flex align-items-center">
                <img src="assets/img/coin1.png" width={40} className="mr-2 ml-2 mt-2 mb-4" />
                <div>
                  <h3 className> Complete any deposit
                    <br />
                    <small>Deposit fiat or digital currency into your personal account</small></h3>
                </div>
                <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg mr-2">Complete</a></div>
              </div>
            </div>
          </div>
          <div className="management-box-bit-border-3 mt-2">
            <div className="management-box-bit-3">
              <div className="box-tag-1 border-0 d-flex align-items-center">
                <img src="assets/img/secur3.png" width={40} className="mr-2 ml-2 mt-2 mb-4" />
                <div>
                  <h3 className>Complete 2FA
                    <br />
                    <small>Enable 2FA on your account</small></h3>
                </div>
                <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg mr-2">Complete</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
<br /><br /><br /><br /><br /><br />

      </Fragment>
    );
  }
}

export default Task_Center;