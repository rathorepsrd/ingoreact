import React, { Component, Fragment } from 'react';
import $ from "jquery";
import Acc_Side from './Acc_Side';

class Account_Over extends Component {
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
            <h3 className="m-0 mt-2"><label>Deposit</label> </h3>
          </div>
          <div className="ml-auto btc-credit">
            <img src="assets/img/creditcard.png" width={80} /> <label><a href="#"> Buy BTC &amp; ETH with credit card now » </a></label>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <p className="mr-3" style={{borderBottom: '3px solid #de0d2c'}}><b> Crypto</b></p>
        <p> <b> Fiat</b> </p>
      </div>
      <div className="btc-setion-text">
        <small>Coin</small>
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
          </div>
          <div className="bg-bl mt-4">
            <h5><i className="bx bx-bulb" style={{color: '#ff0000'}} /> Tips:</h5>
            <ul> 
              <li className="mb-3 mt-3">If you have deposited, please pay attention to the text messages, site letters and
                emails we send to you.
              </li>
              <li className="mb-3"> Coins will be deposited after 1 network confirmations.
              </li>
              <li className="mb-3"> Until 2 confirmations are made, an equivalent amount of your assets will be
                temporarily unavailable for withdrawals.</li>
            </ul>
          </div>
          <p><b> Go to Trade: </b></p>
          <div className="d-flex flex-wrap">
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
            <div className="btc-aud">
              <p><a href="">BTC/AUD </a> </p>
              <p><a href="">BTC/PAX</a> </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 over-border">
          <div className="tab-acount">
            <h5> Deposit network <i className="bx bx-info-circle" style={{color: '#de0d2c'}} /></h5>
            <div className="tab">
              <button className="tablinks" onclick="openCity(event, 'London')" id="London">BTC </button>
              {/* //"defaultOpen" id="London"*/}
              <button className="tablinks" onclick="openCity(event, 'Paris')" id="Paris">  BEP2</button>
            </div>
            <div id="London1" className="tabcontent">
              {/*  <h3>London</h3> */}
              <p>Average arrival time : 1 minutes</p>
              <div className="text-center">
                <br /><br /><p>BTC Address
                </p>
                <img src="assets/img/barcide.png" />
              </div>
              <center><p className="mt-2"> 1Py98t3phFe <i className="bx bx-copy" style={{color: '#ff0000'}} />
                </p></center>
              <div className="bg-bl">
                <p><b>Send only BTC to this deposit address.</b></p>
                <span>Sending coin or token other than BTC to this</span><br />
                <span>address may result in the loss of your deposit.</span>
              </div></div>
            <div id="Paris1" className="tabcontent">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p> 
            </div>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="table-hsitory-deposit">
            <div className="d-flex justify-content-between">
              <p>
                <b>Recent Deposit History</b></p>   <p>  <a href="" style={{color: '#ff0000'}}> Deposit didn't arrive?</a>   <a href="" style={{color: '#ff0000'}}>  View all </a></p>
            </div>
            <div className="table-responsive">
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

export default Account_Over;