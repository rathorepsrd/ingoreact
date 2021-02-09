import React, { Component, Fragment } from 'react';

class Dashboard extends Component {
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
      <div className="d-flex align-items-center">
        <div className="text-span">
          AA
        </div>
        <div className="crito-heading border-0">
          <h3 className="m-0"><label>Atul Awasthi</label>  <label className="user-id"> User ID: 44305385 </label> <label className="vp-veryfy"><i className="bx bx-diamond" /> VIP0  Verify</label></h3>
          <div className="last-login"><label> Last login time 2020-08-08 06:26:16</label>  <label> IP: 162.120.200.51</label>
          </div>
        </div>
      </div>
      <div className="top-welcom-exconical">
        <div className="top-welcom">
          <h3>Welcome to Excoincial </h3>
          <p>Just a few more steps and you’re good to go!</p>
        </div>
        <div className="trck-box ">
          <div className="track-line">
          </div>
          <div className="icon-bar bgt">
            <div><i className="bx bxs-check-circle" /></div> 
            <div><i className="bx bxs-check-circle" /></div> 
            <div> <label> 3</label></div> 
          </div>
        </div>
        <div className="d-flex justify-content-start forne">
          <div className="part">
            <h3 className="mt-4 ml-4">  Register Account </h3>
          </div>
          <div className="part">
            <h3 className="mt-4 ml-4">  2FA</h3>
            <p className="text-left color-white">Secure your account with
              two-factor authentication！<br />
              <a href="#" className="Verified">Verified</a> </p>
          </div>
          <div className="part">
            <h3 className="mt-4 ml-4">  Deposit Funds</h3>
            <p className="text-left color-white mb-4">Add cash or crypto funds to your
              wallet and start trading right away<br />
            </p>
            <a href="#" className="Verified btn-cv mt-3 mb-4">Deposit</a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="d-flex justify-content-between">
            <div className="btn-line mb-4">
              <button type="button" className="spot-btn">Spot </button>
              <button type="button" className="spot-btn">P2P </button>
              <button type="button" className="spot-btn">Margin </button>
              <button type="button" className="spot-btn">Features</button>
              <button type="button" className="spot-btn">Saving</button>
              <button type="button" className="spot-btn"> Pool</button>
            </div>
            <div className=" d-flex align-items-center mb-4">
              <button type="button" className="spot-btn- mr-2">Deposit</button>
              <button type="button" data-target="#add-new-bank-account" data-toggle="modal" className="spot-btn-">Withdraw </button>
            </div>
            <div className="font-bx mt-1">
              <i className="bx bxs-chevron-right-circle" />  
            </div>
          </div>
          <div className="row balace-bar">
            <div className="col-md-8">
              <div className="ac-detl">
                <h5>Account Balance <button type="button" className="vision"> <i className="bx bx-low-vision" /> Hide Balance</button> </h5>
                <h3> 0.0000000 <small>BTC</small></h3>
                <div className="eastimat-value mt-4">
                  <p> Estimated Value:<br />
                    $0.000000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-between align-items-center">
              <div className="circle-prof">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="new-talb">
                <div className="d-flex b-btm ">
                  <div className><a className=" mr-4 ">Activity </a>
                    <span className="ac-p" />
                    <a className>Device </a> </div>
                  <a className="ml-auto">
                    Disable account <i className="bx bxs-chevron-right-circle ml-2" /></a>
                </div>
                <div className="d-flex justify-content-between bn">
                  <div className="text-cvo mt-3">
                    <dl>  web</dl>
                    <dl> Here Location Country</dl>
                  </div>
                  <div className="text-cvo mt-3">
                    <dl>  123.456.789.51
                    </dl>
                    <dl> 2020-08-08 06:26:16</dl>
                  </div>
                </div>
                <div className="d-flex justify-content-between bn">
                  <div className="text-cvo mt-3">
                    <dl>  web</dl>
                    <dl> Here Location Country</dl>
                  </div>
                  <div className="text-cvo mt-3">
                    <dl>  123.456.789.51
                    </dl>
                    <dl> 2020-08-08 06:26:16</dl>
                  </div>
                </div>
                <div className="d-flex justify-content-between bn">
                  <div className="text-cvo mt-3">
                    <dl>  web</dl>
                    <dl> Here Location Country</dl>
                  </div>
                  <div className="text-cvo mt-3">
                    <dl>  123.456.789.51
                    </dl>
                    <dl> 2020-08-08 06:26:16</dl>
                  </div>
                </div>
                <div className="d-flex justify-content-between bn">
                  <div className="text-cvo mt-3">
                    <dl>  web</dl>
                    <dl> Here Location Country</dl>
                  </div>
                  <div className="text-cvo mt-3">
                    <dl>  123.456.789.51
                    </dl>
                    <dl> 2020-08-08 06:26:16</dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-talb">
                <div className="d-flex b-btm ">
                  <div className><a className=" mr-4 "><b>Increase your account security </b>  1/4 </a>
                  </div>
                  <a className="ml-auto">
                    <i className="bx bx-dots-horizontal-rounded  ml-2" />
                  </a>
                  <i className="bx bxs-chevron-right-circle ml-2" />  
                </div>
                <div className="rtyo">
                  <div className="bx-2">
                    <p>Enable 2FA
                      Enabled </p>
                  </div>
                  <div className="bx-2">
                    <p>Identity Verification
                    </p><br />
                    <a href="#"> Verify</a> 
                  </div>
                  <div className="bx-2">
                    <p>Anti-phishing Code
                    </p><a href="#"> Setup</a>
                  </div>
                  <div className="bx-2">
                    <p>Turn-on Withdrawal Whitelist
                    </p>
                    <a href="#"> Turn on</a>
                  </div>
                </div>
              </div>
              <a className="earn-persent-b mt-3">
                <span>API</span> <span className="cr">0</span>   <span> <button type="button" className="spot-btn- mr-2">Spot </button> </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <a className="earn-persent">
            <span>Earn up to 30% commission: Invite friends now!</span> <span> <i className="bx bxs-chevron-right-circle" /></span>
          </a>
          <div className="bar-persent mt-2">
            <div className="d-flex justify-content-between p-2 annauns">  
              <samp> Announcements</samp>  <i className="bx bxs-chevron-right-circle" /> 
            </div>
            <ul className="p-4"> 
              <li> <a href="#">USDC and ERD Added to Savings Products on Binance
                  2020-08-07 </a></li>
              <li> <a href="#">The BUSD Trading Activity Has Now Concluded
                  2020-08-07 </a></li>
            </ul>
          </div>
          <a className="earn-persent-b">
            <span><b>Task Center</b> </span> <span>  View tasks to win rewards <i className="bx bxs-chevron-right-circle" /></span>
          </a>
          <div className="blank-table">
            <div className="earn-persent-b mt-2 ">
              <span><b>Distribution</b> </span> <span>   <i className="bx bxs-chevron-right-circle" /></span>
            </div>
          </div>
        </div>
        <div className="col-md-5 p-0 mb-3">
          <div className="data-table mt-1 w-100">
            <div className="table-responsive vgn" style={{border: '1px solid #ccc'}}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">  Pair
                      Date  </th>
                    <th scope="col">Type / Side
                      Trigger Conditions</th>
                    <th scope="col">Price
                      Amount</th>
                    <th scope="col"> Total
                      Filled</th>
                    <th scope="col"> Action</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              <center>
                <img src="assets/img/no-data-found.png" className="mt-4" />
                <p>No Record Found </p>
              </center>
            </div>
          </div>
        </div>
        <div className="col-md-7 mb-3 ">
          <div className="data-table mt-1 w-100">
            <div className="table-responsive vgn" style={{border: '1px solid #ccc'}}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">  Your Trading Fee Level: VIP 0     </th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col"> </th>
                    <th scope="col">    Fee Structure <i className="bx bxs-chevron-right-circle" /></th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              <center>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-3">
              <div className="text-center">
                <small> Maker</small>
                <h3>0.075% </h3>
              </div>
            </div>
            <div className="col-md-6  p-3">
              <div className="text-center">
                <small> Taker</small>
                <h3>0.075% </h3>
              </div>
            </div>
            <div className="col-md-12"><p style={{fontSize: 14}}>Using BNB to pay for fees ( 25% discount )
                <label className="switch-h">
                  <input type="checkbox" defaultChecked />
                  <span className="slider-h round" />
                </label></p>
              <div className="ac-amunt d-flex mt-2">
                <div className="w-50">
                  <dt>To upgrade to VIP 1</dt>
                  <dt> 1. 30d Trade Volume (BTC)</dt>
                  <span>******** BTC </span> <i className="bx bxs-file" /> <span> / ********% </span>
                </div>
                <div className="side-ner w-50">
                  <dt> *Evaluated at 00:00 AM (UTC) every day</dt>
                  <dt className="mt-4 " style={{float: 'right'}}>   50.00 BTC</dt>
                </div>
              </div>
              <div className="ac-amunt d-flex mt-2">
                <div className="w-50">
                  <dt>50.00 BTC </dt>
                  <dt> 2. Your BNB balance:</dt>
                  <span>******** BTC </span> <i className="bx bxs-file" /> <span> / ********% </span>
                </div>
                <div className="side-ner w-50">
                  <dt style={{float: 'right'}}>  VIP 1</dt>
                  <dt className="mt-4 " style={{float: 'right'}}>   50.00 BTC</dt>
                </div>
              </div>
              <div className="ac-amunt d-flex mt-2">
                <div className="w-50">
                  <dt>VIP 1</dt>
                  <dt />
                </div>
                <div className="side-ner h-25 w-50">
                  <dt> </dt>
                  <dt className="mt-4 " style={{float: 'right'}}>  VIP</dt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <>
{/*--------  Add bank  modal-dialog--------------*/}
<div id="add-new-bank-account" className="modal fade show" role="dialog" aria-modal="true" style={{paddingRight: 17}}>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title font-weight-400">Add bank account</h5>
        <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
      </div>
      <div className="modal-body p-4">
        <form id="addbankaccount" method="post">
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="accountName">Account Name</label>
              <input type="text" className="form-control" data-bv-field="accountName" id="accountName" required defaultValue placeholder="krishn patel" />
            </div>
            <div className="form-group">
              <label htmlFor="accountName">Account Holder Address</label>
              <input type="text" className="form-control" data-bv-field="accountName" id="accountName" required defaultValue placeholder="krishn patel" />
            </div>
            <div className="form-group">
              <label htmlFor="bankName">Bank Name</label>
              <select className="custom-select" id="bankName" name="bankName">
                <option value> Please Select </option>
                <option value={1}>Bank Name 1</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accountName">Bank Address</label>
              <input type="text" className="form-control" data-bv-field="accountName" id="accountName" required defaultValue placeholder />
            </div>
            <div className="d-flex">
              <div className="form-group mr-2">
                <label htmlFor="accountNumber">Code</label>
                <input type="text" className="form-control" data-bv-field="accountNumber" id="accountNumber" required defaultValue placeholder={4511545456546} />
              </div>
              <div className="form-group">
                <label htmlFor="accountNumber" />
                <select className="custom-select mt-2" id="bankName" name="bankName">
                  <option value> BSB </option>
                  <option value={1}>Bank Name 1</option>
                </select>
              </div></div>
            <div className="form-group">
              <label htmlFor="accountName">Account Number</label>
              <input type="text" className="form-control" data-bv-field="accountName" id="accountName" required defaultValue placeholder />
            </div>
            <h6>Note: </h6>
            <div className="form-check custom-control custom-checkbox mb-3 note-text">
              <input id="remember-me" name="remember" className="custom-control-input" type="checkbox" />
              <label className="custom-control-label" htmlFor="remember-me">We only accept payment to your personal account.</label>
            </div>
            <div className="form-check custom-control custom-checkbox mb-3 note-text">
              <input id="remember-me2" name="remember" className="custom-control-input" type="checkbox" />
              <label className="custom-control-label" htmlFor="remember-me2">Each user can only verify one withdrawal bank account</label>
            </div>
            <div className="form-check custom-control custom-checkbox mb-3 note-text">
              <input id="remember-me3" name="remember" className="custom-control-input" type="checkbox" />
              <label className="custom-control-label" htmlFor="remember-me3">It would take up to 1-2 business days for the deposit amount to
                be credited to you.</label>
            </div>
            <button className="btn btn-primary btn-primary-ac btn-block edit-card-btn" type="submit">Add Bank Account</button>
          </div></form>
      </div>
    </div>
  </div>
</div>
</>
</>      
      </Fragment>
    );
  }
}

export default Dashboard;