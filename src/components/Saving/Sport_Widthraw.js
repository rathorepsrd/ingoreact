import React, { Component, Fragment } from 'react';
import Acc_Side from "../Account/Acc_Side";

class Sport_Widthraw extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="history-by"> 
  </section>{/* End Hero */}
  <div className="row p-0 m-0">
      <Acc_Side />
    <div className="col-md-9">
      <div className="d-flex align-items-center">
        <div className="crito-heading border-0 d-flex w-100">
          <div className> <p> Spot <i className="bx bxs-chevron-right" />   Withdraw </p>
            <h3 className="m-0 mt-2"><label>Withdraw</label> </h3>
          </div>
          <div className="ml-auto btc-credit">
            <label style={{color: '#000'}}> 24h Withdrawal Limit:2 BTC</label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className="mr-3" style={{borderBottom: '3px solid #de0d2c'}}><b> Crypto</b></p>
          <p> <b> Fiat</b> </p></div>
        <div><a href="#" className="beginner-text">Beginner withdrawal tutorial </a></div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="over-border-dxc mb-2">
            <form>
              <div className="d-flex p-2">
                <div className="form-group mr-4 w-50">
                  <label htmlFor="email">Coin </label>
                  <select className="form-control search-slt" id="exampleFormControlSelect1">
                    <option style={{backgroundImage: 'url("../img/coin1.png")'}}>  BTC  Bitcoin</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className="form-group  w-50">
                  <label htmlFor="email">Transfer network <i className="bx bx-info-circle" style={{color: '#de0d2c'}} /> </label>
                  <select className="form-control search-slt  " id="exampleFormControlSelect1">
                    <option>BTC  Bitcoin</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="over-border-dxc">
            <form>
              <div className="p-2">
                <div className="form-group ">
                  <label htmlFor="email">Recipient's BTC Address </label>
                  <input type="email" className="form-control-extonic-df" placeholder="testemail@gmail.com" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Recipient's BTC Address <i className="bx bx-info-circle" style={{color: '#de0d2c'}} /> </label>
                  <input type="email" className="form-control-extonic-df" placeholder="testemail@gmail.com" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Amount</label>
                  <input type="email" className="form-control-extonic-df text-right" placeholder="BTC" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="avi-tg">
                  <div className="mb-2"><small className>Available Balance 0 BTC</small></div>
                  <p className="m-0"> Transaction Fee: - BTC</p>
                  <p> You Will Get: - BTC</p>
                </div>
              </div>
              <center> <button type="button" className="btn btn-primary wrn-btn mr-1 w-75 " data-target="#add-new-bank-account-eo" data-toggle="modal" style={{position: 'relative', top: 30}}>SUBMIT</button></center> 
            </form>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="d-flex justify-content-end trans-sped"><a href="#" className="mr-3"> Transaction Speed » </a> <a href="#"> Transaction Speed » </a> </div>
          <div className="d-flex flex-row">
            <div className="balance-block text-deco mr-3">
              <p> Total balance:</p>
              <h5>0.00000000 BTC </h5>
            </div>
            <div className="balance-block-2 text-deco mr-3">
              <p> In order:</p>
              <h5>0.00000000 BTC </h5>
            </div>
            <div className="balance-block-3 text-deco mr-3">
              <p> Available Balance:</p>
              <h5>0.00000000 BTC </h5>
            </div>
          </div><br />
          <p>Average arrival time : 1 minutes</p>
          <div className="text-center">
            <br /><br /><p>BTC Address
            </p>
            <img src="assets/img/barcide.png" />
          </div>
          <center><p className="mt-2"> 1Py98t3phFe4JBdoYjT9LHCsuLqry3RjZK <i className="bx bx-copy" style={{color: '#ff0000'}} />
            </p></center>
          <div className="bg-bl mt-4">
            <h5><i className="bx bx-bulb" style={{color: '#ff0000'}} /> Tips:</h5>
            <ul> 
              <li className="mb-3 mt-3">Do not withdraw directly to a crowdfund or ICO address, as your account will
                not be credited with tokens from such sales.
              </li>
              <li className="mb-3">
                When withdrawing to the Binance user's address, the handling fee will be returned
                to the Current Account by default. Learn more
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 mt-5 ">
          <div className="table-hsitory-deposit">
            <div className="d-flex justify-content-between">
              <p>
                <b>Recent Deposit History</b></p>   <p>  <a href style={{color: '#ff0000'}}> Deposit didn't arrive?</a>   <a href style={{color: '#ff0000'}}>  View all </a></p>
            </div>
            <div className="table-responsive table-trad">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Coin      </th>
                    <th scope="col">Status     </th>
                    <th scope="col">Amount    </th>
                    <th scope="col">Date     </th>
                    <th scope="col">Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" />
                    <td />
                    <td />
                    <td>@</td>
                  </tr>
                </tbody>
              </table>
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
        </div>
      </div>
    </div>
  </div>
</>
<>
{/*--------  Add bank  modal-dialog--------------*/}
<div id="add-new-bank-account-eo" className="modal fade show bd-example-modal-lg" role="dialog" aria-modal="true" style={{paddingRight: 17}}>
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header bg-bliue">
        <h5 className="modal-title font-weight-400">Transaction Fee Settings</h5>
        <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
      </div>
      <div className="modal-body p-4">
        <form id="addbankaccount" method="post">
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <div className>
                <input type="radio" id="male" name="gender" defaultValue="male" />
                <label htmlFor="male">Recommended:</label>
              </div>
              <div className>
                10.19 bits/kb Estimated to begin confirmation within 6 blocks<br /> Confirmation time target: 
                <div className="form-group mr-2 w-50" style={{float: 'right'}}>
                  <select className="custom-select circle-inpute-modal  " id="bankName" name="bankName">
                    <option value> 60 minutes (6 blocks)</option>
                    <option value={1}>Bank Name 1</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className>
                <input type="radio" id="male2" name="gender" defaultValue="male2" />
                <label htmlFor="male">Recommended:</label>
              </div>
              <div className>
                <div className="form-group mr-2 w-40-text " style={{float: 'left'}}>
                  <select className="custom-select circle-inpute-modal  " id="bankName" name="bankName">
                    <option value> 0.0</option>
                    <option value={1}>1</option>
                  </select>
                </div>
                <div className="form-group w-40-text mr-2" style={{float: 'right'}}>
                  <select className="custom-select circle-inpute-modal  " id="bankName" name="bankName">
                    <option value>BTC (bits)</option>
                    <option value={1}>----</option>
                  </select>
                </div>
                <div className=" form-group align-items-center remember" style={{fontSize: 13}}>
                  <input type="checkbox" /> Pay only the required fee of 10.00 bits/kb (read the tooltip)
                </div>
              </div>
            </div>
            <div className=" form-group align-items-center remember" style={{fontSize: 18}}>
              <input type="checkbox" /> Enable Replace - By - Free
            </div>
            <div className="d-flex">
              <div className="form-group mr-2">
                <button className="btn btn-primary btn-primary-ac btn-block edit-card-btn pl-3 pr-3" type="submit" data-target="#add-new-bank-account-eu" data-toggle="modal">SAVE</button>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-primary-ac-blu btn-block edit-card-btn  pl-3 pr-3" type="submit">Cancel</button>
              </div></div>
          </div></form>
      </div>
    </div>
  </div>
</div>
</>
      </Fragment>
    );
  }
}

export default Sport_Widthraw;