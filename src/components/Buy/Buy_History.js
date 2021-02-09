import React, { Component, Fragment } from 'react';

class Buy_History extends Component {
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
                {/*   <ul class="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 2.1</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 2.2</span>
      </a>
    </li>
  </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dual Currency Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems4" aria-controls="collapseSubItems4" aria-expanded="false">Savings History</a>
                {/*   <ul class="nav-second-level collapse" id="collapseSubItems4" data-parent="#navAccordion">
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 4.1</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 4.2</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 4.2</span>
      </a>
    </li>
  </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Buy Crypto History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems8" aria-controls="collapseSubItems8" aria-expanded="false">Loan History</a>
                {/*   <ul class="nav-second-level collapse" id="collapseSubItems8" data-parent="#navAccordion">
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Repayment History</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">LTV Adjustment History</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Liquidation History</span>
      </a>
    </li>
        <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Loan History</span>
      </a>
    </li>

  </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Locked Staking History </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse" data-target="#collapseSubItems5" aria-controls="collapseSubItems4" aria-expanded="false">Defi Staking History</a>
                {/*  <ul class="nav-second-level collapse" id="collapseSubItems5" data-parent="#navAccordion">
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 4.1</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 4.2</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="nav-link-text">Item 4.2</span>
      </a>
    </li>
  </ul> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div className="col-md-9">
      <div className="crito-heading">
        <h3> Buy Crypto History</h3>
      </div>
      <div className="type-btn mt-4 mb-4">
        <button type="button" className="sell-btn">Buy</button>
        <button type="button" className="sell-btn-next">Sell</button>
        <button type="button" className="sell-btn-next">Convert</button>
      </div>
      <div className="data-table">
        <div className="table-responsive" style={{border: '1px solid #ccc'}}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">  Method  </th>
                <th scope="col">Amount</th>
                <th scope="col">Price</th>
                <th scope="col"> Fees</th>
                <th scope="col"> Final Amount</th>
                <th scope="col"> Date</th>
                <th scope="col"> Status</th>
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
</>

        
      </Fragment>
    );
  }
}

export default Buy_History;