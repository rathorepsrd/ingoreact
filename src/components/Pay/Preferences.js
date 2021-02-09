import React, { Component, Fragment } from 'react';

class Preferences extends Component {
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
        <h3> Preferences
        </h3>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="rav-info">
            <div className="d-flex align-items-end">
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Order Confirmation</h5>
                <p> If the order reminder function is enabled, it will need to be reconfirmed every time an order is submitted.</p>
              </div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3> Limit Order</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Market Order</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Market Order</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div></div>
          <div className="management-box mt-2 mb-2">
            <div className="box-tag-1 d-flex align-items-center">
              <div>
                <h3>Notification Language Settings
                </h3>
                <p> Set preferred notification language.</p>
              </div>
              <div className=" ml-auto"><a href="#" className="Verified btn-cv-fg">English </a></div>
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
                <h3>Notification Management</h3>
                <p>Set preferred notification types. </p>
              </div>
              {/* <div class=" ml-auto"><a href="#" class="Verified btn-cv-fg">Deposit</a></div> */}
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>System Messages</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Activities</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Excoincial News</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div>
            <div className="box-tag d-flex align-items-center">
              <div>
                <h3>Trade Notification</h3>
              </div>
              <div className=" ml-auto"><label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></div>
            </div>
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

export default Preferences;