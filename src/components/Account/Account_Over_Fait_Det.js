import React, { Component, Fragment } from 'react';
import Acc_Side from "./Acc_Side";

class Account_Over_Fait_Det extends Component {
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
        <div className="crito-heading border-0 d-flex w-100 p-0 mt-3">
          <div className=""> <p> Spot  <i className="bx bxs-chevron-right" />   Deposit </p>
            <h3 className="m-0"><label>Deposit</label> </h3>
          </div>
          <div className="ml-auto btc-credit">
            <img src="assets/img/creditcard.png" width={80} /> <label><a href="#"> Buy BTC &amp; ETH with credit card now » </a></label>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <p className="mr-3"><b> Crypto</b></p>
        <p style={{borderBottom: '3px solid #de0d2c'}}> <b> Fiat</b> </p>
      </div>
      <div className="btc-setion-text">
        <p>1. Select currency and payment method</p>
        <small> Currency</small>
        <select className="form-control search-slt mr-1 w-25" id="exampleFormControlSelect1">
          <option>Select Vehicle</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
        </select>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="over-border mt-3">
            <div className="d-flex  align-items-center">
              <h6> Bank/Card Deposit </h6> &nbsp;   &nbsp;  <p className="m-0 recomnd">Recommended</p>
            </div>
            <div className="red-box mt-3">
              <div className="d-flex">
                <div className="mr-3">
                  <img src="assets/img/bank-.png" /></div>
                <div>
                  <h4> Bank Transfer(SEPA)</h4>
                  <p>+ 0.5 EUR Fee</p>
                </div>
                <i className="bx bx-check" style={{position: 'absolute', right: '5%', zIndex: 999, fontSize: 23, color: '#000', top: 75}} />
                <div className="triangle triangle-0 mr-auto">
                </div>
              </div>
            </div>
            <div className="d-flex  align-items-center mt-3 ">
              <h6>Other Payments </h6>
            </div>
            <div className="d-flex">
              <div className="red-box-grey mt-3 mr-1">
                <div className="d-flex">
                  <div className="mr-3">
                    <img src="assets/img/green.png" /></div>
                  <div>
                    <h4> Advcash Account Balance
                    </h4>
                    <p>+ 0% Fee</p>
                  </div>
                </div>
              </div>
              <div className="red-box-grey mt-3">
                <div className="d-flex">
                  <div className="mr-3">
                    <img src="assets/img/bit-con.png" width={40} /></div>
                  <div>
                    <h4> Payeer Account Balance
                    </h4>
                    <p>+ 0.5% Fee </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="red-box-grey mt-3 mr-1">
              <div className="d-flex">
                <div className="mr-3">
                  <img src="assets/img/tak.png" width={40} /></div>
                <div>
                  <h4> Enter Account Balance
                  </h4>
                  <p>+ 0% Fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <p> 2. Payment details</p>
          <div className="over-border">
            <div className="tab-acount">
              <h5 style={{background: '#f2f2f2', padding: '10px 10px', marginBottom: 10}}>Enter Amount</h5>
              <div className="form-group mt-3 ">
                <input type="text" name="" className="text-vert" placeholder="" />
                <span style={{position: 'relative', left: '89%', top: '-32px', background: '#e6e6e6', padding: '9px 10px'}}>EUR</span>
              </div>
              <div className="">
                <div className="d-flex"> <p className="mb-0  mr-5"> Fee:</p> <label><b>  0.00 EUR </b></label> </div>
                <div className="d-flex"><p className="mr-5">You will get: </p>  <label><b>  0.00 EUR</b></label></div>
              </div>
              <div className="form-check mb-5">
                <label className="form-check-label textvali">
                  <input type="checkbox" className="form-check-input " defaultValue />This service is supported by ClearJunction. By proceeding you consent to Binance sharing your
                  personal Information on your Binance account with ClearJunction in accordance tto our Term of
                  Use and Privacy Policy
                </label>
              </div>
              <a href="#" className="brn-ivite-cb mt-5">Continue </a>
              <div id="Paris" className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-4 ">
          <div className="table-hsitory-deposit">
            <div className="d-flex justify-content-between">
              <p>
                <b>Recent Deposit History</b></p>   <p>  <a href="" style={{color: '#ff0000'}}> Deposit didn't arrive?</a>   
                <a href="" style={{color: '#ff0000'}}>  View all </a></p>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Coin      </th>
                  <th scope="col">  Status     </th>
                  <th scope="col">     Amount    </th>
                  <th scope="col">    Date     </th>
                  <th scope="col">           Information</th>
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
      </Fragment>
    );
  }
}

export default Account_Over_Fait_Det;