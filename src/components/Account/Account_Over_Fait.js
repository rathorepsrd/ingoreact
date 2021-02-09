import React, { Component, Fragment } from 'react';
import $ from "jquery";
import Acc_Side from "./Acc_Side";

class Account_Over_Fait extends Component {
  componentDidMount(){
    $(function(){
     $("#London1").show();
     $("#London").on("click", function(){
         $("#London1").toggle();
         $("#Paris1").hide();
     });
     $("#London1").show();
     $("#Paris").on("click", function(){
         $("#Paris1").show();
         $("#London1").hide();
     });
   });
   }
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
                  <h4> Etana Account Balance
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
              <h5> Deposit network <i className="bx bx-info-circle" style={{color: '#de0d2c'}} /></h5>
              <div className="tab">
                <button className="tablinks" onclick="openCity(event, 'London')" id="London">BTC </button>
                <button className="tablinks" onclick="openCity(event, 'Paris')" id="Paris">  BEP2</button>
              </div>
              <div id="London1" className="tabcontent">
                {/*  <h3>London</h3> */}
                <p>Average arrival time : 1 minutes</p>
                <div className="text-center">
                  <br /><br /><p>BTC Address
                  </p>
                  <img src="assets/img/edit-bsr.png" />
                </div>
                {/* <center><p class="mt-2"> 1Py98t3phFe4JBdoYjT9LHCsuLqry3RjZK <i class='bx bx-copy' style="color: #ff0000;" ></i>
</p></center> */}
                <div className="bg-bl text-center mt-4 mb-4">
                  <p>Please complete <label>Identity Verification</label> to
                    increase the limit to 500 EUR.
                  </p>
                </div>
                <center>
                  <a href="#" className="brn-ivite mt-5">Verify Now</a></center>
              </div>
              <div id="Paris1" className="tabcontent">
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

export default Account_Over_Fait;