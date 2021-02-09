import React, { Component, Fragment } from 'react';
import Acc_Side from "../Account/Acc_Side";

class Pool_Acc extends Component {
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
      <div className="row py-4 ">
        <div className="col-sm-3">
          <div className="d-flex align-items-center border-right py-3">
            <h4 className="mb-0">Pool</h4>
            <button className="btn btn-default border ml-3 border-radius">Hide Balance</button>
          </div>
        </div>	
        <div className="col-sm-7 align-items-center d-flex">
          <div className> 
            <div className="col-md-12 p-0">
              <p className="font-weight-bold small mb-0">Quick menu</p>
              <a href="" className="red-text font-weight-bold small border-bottom border-danger">Transaction History</a>
            </div>  
          </div>
        </div>	
      </div>	
      <div className="est-bal">
        <div className="bg-light card-body mt-2 mb-4">
          <h6>Estimated Balance</h6>
          <h4 className="mb-0">0.00000000 <small> BTC≈ €0.000000 </small></h4>
        </div>	
      </div> 
      <div className="card card-body">
        <div className>
          <div className="search-btn">
            <img width={15} src="assets/img/search.png" /> <input className="border-0" placeholder="Search Coin" type="" name="" />
          </div>
        </div> 
        <h6 className="mt-5 mb-2">Balance</h6>
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
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
                </td>
              </tr>
              <tr>
                <td><img className="mr-2" width="23px" src="assets/img/btc.png" /> EUR  Euro</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td> 0.00000000</td>
                <td>
                  <a href="" className="red-text font-weight-bold">Deposit</a> 
                  <a href="" className="red-text font-weight-bold mx-4">Withdraw</a> 
                  <a href="" className="red-text font-weight-bold">Trade </a>
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

export default Pool_Acc;