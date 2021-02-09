import React, { Component, Fragment } from 'react';
import Acc_Side from "../Account/Acc_Side";

class Spot_Acc extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="history-by"> 
  </section>{/* End Hero */}
  <div className="row p-0 m-0">
    <Acc_Side />
    <div className="col-md-9 spot_accounts">
      <div className="row py-4 border-bottom">
        <div className="col-sm-5">
          <div className="d-flex align-items-center">
            <h4 className="mb-0">Spot Wallet</h4>
            <button className="btn btn-default border ml-3 border-radius">Hide Balance</button>
          </div>
        </div>	
        <div className="col-sm-7">
          <div className="row">
            <div className="col-md-3"><button className="btn btn-primary wrn-btn mr-1">Deposit</button></div>
            <div className="col-md-3"><button className="btn white-btn mr-1">Withdraw</button></div>
            <div className="col-md-3"><button className="btn white-btn wrn-btn mr-1">Transfer</button></div>
            <div className="col-md-3 p-0 d-flex align-items-center"><a href className="red-text font-weight-bold small border-bottom border-danger">Transaction History</a></div>
          </div>	
        </div>	
      </div>	
      <div className="est-bal mb-3">
        <div className="bg-light card-body mt-4">
          <h6>Estimated Balance</h6>
          <h4 className="mb-0">0.00000000 <small> BTC≈ €0.000000 </small></h4>
        </div>	
      </div> 
      <div className="card card-body">
        <div className>
          <div className="search-btn">
            <img width={15} src="assets/img/search.png" /> <input className="border-0" placeholder="Search Coin" type name />
          </div>
          <div className="d-inline-block ml-3">
            <img src="assets/img/check.png" />
            <span className="font-weight-bold ml-2">Hide Small Balances</span>
          </div>  
          <div className="d-inline-block ml-5">
            <a href className="red-text font-weight-bold small border-bottom border-danger">Convert to EXL</a>
          </div>
        </div> 
        <h6 className="mt-5 mb-2">Cash Balance </h6>
        <div className="table-responsive">
          <table className="table border-left border-right border-bottom">
            <thead className>
              <tr>
                <th scope="col">Coin</th>
                <th scope="col">Total</th>
                <th scope="col">Available</th>
                <th scope="col">Locked</th>
                <th scope="col">BTC Value</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/eur.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/eur.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
        <h6 className="mt-5 mb-2">Crypto Balance</h6>
        <div className="table-responsive">
          <table className="table border-left border-right border-bottom">
            <thead className="thead-light">
              <tr>
                <th scope="col">Coin</th>
                <th scope="col">Total</th>
                <th scope="col">Available</th>
                <th scope="col">Locked</th>
                <th scope="col">BTC Value</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href className="red-text font-weight-bold">Deposit</a> 
                  <a href className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>  
    </div>
  </div>
</>

      </Fragment>
    );
  }
}

export default Spot_Acc;