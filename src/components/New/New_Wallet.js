import React, { Component, Fragment } from 'react';

class New_Wallet extends Component {
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
        <div className="d-flex align-items-center">
          <h3 className="mr-5"> Wallet</h3>
          <div className="dropdown brtn-selct  ">
            <button className="btn btn-primary  spot-btn-wallet mr-2" type="button" data-toggle="dropdown">Deposit <i className="bx bx-plus-circle" />
              {/*  <span class="caret"></span> */}</button>
            <ul className="dropdown-menu p-2">
              <li><a href="#" data-target="#add-new-bank-account-er" data-toggle="modal"><img src="assets/img/wallet-list.png" width={20} /> Create Multi-Signature Wallet</a></li>
              <li><a href="#" data-target="#myModal1" data-toggle="modal"><img src="assets/img/wallet-list.png" width={20} /> Join Multi-Signature Wallet</a></li>
              <li><a href="#" data-target="#myModal1" data-toggle="modal"><img src="assets/img/wallet-list.png" width={20} /> Multi-sign Wallet</a></li>
            </ul>
          </div>
          {/*    <button type="button" class="">Deposit   </button> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className style={{overflowX: 'auto', width: '100%'}}>
            <table className="table">
              {/*  <thead>
    <tr>
<th scope="col">#</th>
<th scope="col">First</th>
<th scope="col">Last</th>
<th scope="col">Handle</th>
     
    </tr>
  </thead> */}
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src="assets/img/wallet-icon.png" width={30} className="mr-1" />
                      <div>
                        <label className="mb-0"><b> Testnet</b></label>
                        <div className="btc-text">BTC (Bitcoin)</div>
                      </div>
                    </div>
                  </td>
                  <td>$ 9,566.23</td>
                  <td><a href="#" className="red-text"> +1.88%</a></td>
                  <td> <img src="assets/img/line-bar.jpg" width={60} /></td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src="assets/img/wallet-icon.png" width={30} className="mr-1" />
                      <div>
                        <label className="mb-0"><b> BitPay FAQ Wallet</b></label>
                        <div className="btc-text">ETH (Ethereum)</div>
                      </div>
                    </div>
                  </td>
                  <td>$ 9,566.23</td>
                  <td><a href="#" className="red-text"> +1.88%</a></td>
                  <td> <img src="assets/img/line-bar.jpg" width={60} /></td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src="assets/img/wallet-icon.png" width={30} className="mr-1" />
                      <div>
                        <samp><b> Testnet</b></samp>
                        <div className="btc-text">BTC (Bitcoin)</div>
                      </div>
                    </div>
                  </td>
                  <td>$ 9,566.23</td>
                  <td><a href="#" className="red-text"> +1.88%</a></td>
                  <td> <img src="assets/img/line-bar.jpg" width={60} /></td>
                </tr>
              </tbody>
            </table>
            <div className="view-more">
              <a href="#"> View more markets &gt;</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h6 className="mt-2"> Balance Details</h6>
          <div className="d-flex justify-content-between">
            <div className="btn-line mb-4 btn-small">
              <button type="button" className="spot-btn">Spot </button>
              <button type="button" className="spot-btn">P2P </button>
              <button type="button" className="spot-btn">Margin </button>
              <button type="button" className="spot-btn">Features</button>
              <button type="button" className="spot-btn">Saving</button>
              <button type="button" className="spot-btn"> Pool</button>
            </div>
            <div className=" d-flex mb-4">
              <button type="button" className="spot-btn-x mr-2">Deposit</button>
              <button type="button" data-target="#add-new-bank-account" data-toggle="modal" className="spot-btn-x">Withdraw </button>
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
              <div className="circle-prof-x">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
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
  <>
{/*--------  Add bank  modal-dialog--------------*/}
<div id="add-new-bank-account-er" className="modal fade show" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{paddingRight: 17}}>
  <div className="modal-dialog modal-dialog-centered" role>
    <div className="modal-content">
      <div className="modal-header bg-bliue">
        <h5 className="modal-title font-weight-400">Create Multi-Signature Wallet</h5>
        <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
      </div>
      <div className="modal-body p-4">
        <form id="addbankaccount" method="post">
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="accountName">Wallet Name</label>
              <input type="text" className="form-control circle-inpute" data-bv-field="accountName" id="accountName" required defaultValue placeholder=" " />
            </div>
            <div className="form-group">
              <label htmlFor="accountName">Your Name</label>
              <input type="text" className="form-control circle-inpute" data-bv-field="accountName" id="accountName" required defaultValue placeholder=" " />
            </div>
            <div className="d-flex">
              <div className="form-group mr-2">
                <label htmlFor="accountNumber">Total Number of copayers</label>
                <select className="custom-select circle-inpute " id="bankName" name="bankName">
                  <option value> 1 </option>
                  <option value={1}>Bank Name 1</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="accountNumber">Required number of signatures</label>
                <select className="custom-select circle-inpute " id="bankName" name="bankName">
                  <option value> 1 </option>
                  <option value={1}>Bank Name 1</option>
                </select>
              </div></div>
            <div className="advance-section d-flex justify-content-between mb-4 mt-4">
              <div className="advanced-option ">Show Advanced Options</div>
              <div> <i className="bx bx-chevron-right" /></div>
            </div>
            <button className="btn btn-primary btn-primary-ac btn-block edit-card-btn" type="submit">Create 2-of-2 Wallet</button>
          </div></form>
      </div>
    </div>
  </div>
  {/*--------  Add bank  modal-dialog--------------*/}
  <div id="myModal1" className="modal fade show" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{paddingRight: 17}}>
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header bg-bliue">
          <h5 className="modal-title font-weight-400">Join Multi-Signature Wallet</h5>
          <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
        </div>
        <div className="modal-body p-4">
          <form id="addbankaccount" method="post">
            <div className="mb-3">
              <div className="form-group">
                <label htmlFor="accountName">Your Nickname </label>
                <input type="text" className="form-control circle-inpute" data-bv-field="accountName" id="accountName" required defaultValue placeholder=" " />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between">
                  <div> <label htmlFor="accountName">Wallet invitation</label> </div> <div><a href="#" style={{color: '#81cd1f'}}> <i className="bx bxs-check-circle" /> </a> <a href="#"> <i className="bx bx-scan" /> </a> </div></div>
                <input type="text" className="form-control circle-inpute" data-bv-field="accountName" id="accountName" required defaultValue placeholder=" " />
              </div>
              <div className="advance-section d-flex justify-content-between mb-4 mt-4">
                <div className="advanced-option ">Show Advanced Options </div>
                <div> <i className="bx bx-chevron-right" /></div>
              </div>
              <button className="btn btn-primary btn-primary-ac btn-block edit-card-btn" type="submit">Create 2-of-2 Wallet</button>
            </div></form>
        </div>
      </div>
    </div>
    {/*--------  multi sign wallet--------------*/}
    <div id="add-new-bank-account-multi" className="modal fade show" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{paddingRight: 17}}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-bliue">
            <h5 className="modal-title font-weight-400">Shared Multi-Signature Wallet</h5>
            <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
          </div>
          <div className="modal-body p-4">
            <form id="addbankaccount" method="post">
              <div className="mb-3 text-center">
                <center> <p>Shared this invitations with your copayers </p></center> 
                <img src="assets/img/barcode.png" className="mb-5" /> 
                <p>9GB efsfjkjsfffhfhhfGHRKDDKVVIDJKEJKJKVJ </p>
                <a href="#" className="invitation-cancel">Cancel Invitations</a><br />
                <div className="advance-section d-flex justify-content-between">
                  <div className="advanced-option ">waiting for copayers               </div>
                  <div>  [ 2-of-2 ]</div>
                </div>
                <div className="advance-section-2 d-flex justify-content-between ">
                  <div className="advanced-option "><i className="bx bx-check" /> Me               </div>
                  <div></div>
                </div>
                <div className="advance-section-2 d-flex justify-content-between ">
                  <div className="advanced-option "><i className="bx bxs-hourglass" /> Waiting...  </div>
                  <div> </div>
                </div>
              </div></form>
          </div>
        </div>
      </div>
    </div></div></div>
</>

      </Fragment>
    );
  }
}

export default New_Wallet;