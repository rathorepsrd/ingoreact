import React, { Component, Fragment } from 'react';

class Saving_Acc extends Component {
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
                <a className="nav-link" href="#">Spot Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems2" aria-controls="collapseSubItems2" aria-expanded="false">Margin Orders</a>
                <ul className="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Item 2.1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Item 2.2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dual Currency Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems4" aria-controls="collapseSubItems4" aria-expanded="false">Savings History</a>
                <ul className="nav-second-level collapse" id="collapseSubItems4" data-parent="#navAccordion">
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
                <a className="nav-link" href="#">Buy Crypto History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems8" aria-controls="collapseSubItems4" aria-expanded="false">Loan History</a>
                <ul className="nav-second-level collapse" id="collapseSubItems8" data-parent="#navAccordion">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Repayment History</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">LTV Adjustment History</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Liquidation History</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-link-text">Loan History</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Locked Staking History </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems5" aria-controls="collapseSubItems4" aria-expanded="false">Defi Staking History</a>
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
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div className="col-md-9">
      <div className="d-flex mb-3 mt-3">
        <div className="crito-heading d-flex mr-3" style={{borderRight: '1px solid #cccccc', borderBottom: 'none'}}>
          <h3 className="mr-3"> Savings</h3> <button type="text" className="bx-eye"><i className="bx bx-show" /> Hide Balance</button>
        </div>
        <div className>
          <h6> Quick action</h6>
          <div className="d-flex">
            <a href="#" className="mr-3 quick-action">Products</a>
            <a href="#" className="mr-3 quick-action"> History</a>
            <a href="#" className="mr-3 quick-action">  Staking Products</a>
            <a href="#" className="mr-3 quick-action">Staking History</a>
          </div>
        </div>
      </div>
      <div className="tanc-history">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Saving    </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">  Locked Staking </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">      DeFi Staking</a>
          </li>
        </ul>
      </div>
      <div className="estimate-value d-flex justify-content-between mt-4 mb-4">
        <div className>
          <h5>Estimated Value</h5>
          <p className="mb-0">0.00000000 <small>BTC</small></p>
          <small> ≈ €0.000000</small>
        </div>
        <div className>
          <h5>Total Interest Earned</h5>
          <p className="mb-0">0.00000000 <small>BTC</small></p>
          <small> ≈ €0.000000</small>
        </div>
        <div className>
          <h5>Today's Interest Earned</h5>
          <p className="mb-0">0.00000000 <small>BTC</small></p>
          <small> ≈ €0.000000</small>
        </div>
        <div className>
          <h5>Savings Trial Fund Bonus</h5>
          <p className="mb-0">0.00000000 <small>BTC</small></p>
          <small> ≈ €0.000000</small>
        </div>
      </div>
      <div className="tanc-history">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Flexible    </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">  Locked</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">      Activities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">      Saving Trial Fund</a>
          </li>
          {/* A.treadstreet-
1. Saving account
2. transcation history
3. Deposite flait verfy acount
B.Modernhood- bug Solve on 
Coderaddy- icon create  */}
        </ul>
      </div>
      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n  a{\n    color: #000;\n  }\n" }} />
      <div className="data-table">
        <div className="table-responsive tyu" style={{border: '1px solid #ccc'}}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">   Flexible Savings     </th>
                <th scope="col">   Total Amount      </th>
                <th scope="col">   Accruing interest  </th>
                <th scope="col"> Today's Subscription </th>
                <th scope>     Redeeming      </th>
                <th scope>  Cumulative Interest       </th>
                <th scope>  Estimated Annual Yield       </th>
                <th scope>      Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
          <center>
            <img src="assets/img/no-data-found.png" className="mt-4" />
            <p>No Record Found </p>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

</>

      </Fragment>
    );
  }
}

export default Saving_Acc;