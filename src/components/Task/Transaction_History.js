import React, { Component, Fragment } from 'react';
import Acc_Side from "../Account/Acc_Side";

class Transaction_History extends Component {
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
        <div className="crito-heading  d-flex w-100">
          Transaction History
        </div>
      </div>
      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\na{\n  color: #000;\n}\n" }} />
      <div className="row">
        <div className="col-md-12 tanc-history">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link  active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Deposit &amp; Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">  Transfer </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">    Distribution</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Convert</a>
            </li>
          </ul>
          {/* <div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">.rgggggg..</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">..gggggggggggg.</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">..uuuuuuuuuu.</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">..hhhhhhhhhhhhh.</div>
</div> */}
        </div>
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <div className="type-btn mt-4 mb-4">
              <button type="button" className="sell-btn">Crypto</button>
              <button type="button" className="sell-btn-next">Cash </button>
            </div>
            <div>
              <a href className="d-flex align-items-center"> <i className="bx bx-redo" style={{fontSize: 25}} /> Export Deposit History </a></div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="mr-2">
              <small> Transfer</small>
              <select className="form-control search-slt mr-1 " id="exampleFormControlSelect1">
                <option>Select Vehicle</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
              </select></div>
            <div className="mr-2">
              <small> Date</small>
              <select className="form-control search-slt mr-1" id="exampleFormControlSelect1">
                <option>11/01/2020, 3PM</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
              </select></div>
            <div className="mr-2">
              <small> Coin</small>
              <select className="form-control search-slt mr-1" id="exampleFormControlSelect1">
                <option>All</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
              </select></div>
            <div className="mr-2">
              <small> Status</small>
              <select className="form-control search-slt mr-1" id="exampleFormControlSelect1">
                <option>All</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
              </select></div>
            <div className="ml-auto">
              <div className="type-btn mt-4 mb-4">
                <button type="button" className="sell-btn">Reset</button>
                <button type="button" className="sell-btn-next">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-4 ">
          <div className="table-hsitory-deposit">
            <div className="d-flex justify-content-between">
              <p>
                <b>Recent Deposit History</b></p>   <p>  <a href style={{color: '#ff0000'}}> Deposit didn't arrive?</a>   <a href style={{color: '#ff0000'}}>  View all </a></p>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date            </th>
                  <th scope="col">     Coin            </th>
                  <th scope="col">          Amount            </th>
                  <th scope="col">        Status</th>
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

export default Transaction_History;