import React, { Component, Fragment } from 'react';

class Margin_Acc extends Component {
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
        <div className="crito-heading d-flex justify-content-between align-items-center mr-3" style={{borderBottom: 'none'}}>
          <h3 className="mr-3"> Margin Account</h3> <button type="text" className="bx-eye">3X </button>
        </div>
        <div className>
          <div className="type-btn mt-4 mb-4">
            <button type="button" className="sell-btn-cript">Cross Margin</button>
            <button type="button" className="sell-btn-next-cript">Isolated Margin </button>
          </div>
        </div>
      </div>
      <div className=" d-flex flex-wrap  mt-4 mb-4">
        <div className="mr-4">
          <h5>Estimated Balance</h5>
          <p className="mb-0">0.00000000  <small>BTC  $0.0000000</small></p>
          {/* <small> ≈ €0.000000</small> */}
        </div>
        <div className>
          <h5>Total Debt</h5>
          <p className="mb-0">0.00000000  <small>BTC  $0.0000000</small></p>
          {/* <small> ≈ €0.000000</small> */}
        </div>
        <div style={{height: 132, overflow: 'hidden', textAlign: 'center'}}>
          <figure className="pie-chart mr-auto">
            <h5>Your margin Level</h5>
          </figure>
        </div>
      </div>
      <h5 className="mb-3" style={{float: 'right', color: '#4dd3ab', fontSize: 27}}>9990.00 <small style={{fontSize: 14, color: '#000'}}>Low risk</small></h5><br />
      <div className="d-flex " style={{float: 'right', marginRight: '-16%'}}>
        <p className="mr-3 d-flex align-items-center"> <label className="doted-cond mt-2 mr-2" /> Low Risk</p>
        <p className="mr-3 d-flex align-items-center"> <label className="doted-cond1 mt-2 mr-2" /> Moderate Risk</p>
        <p className="mr-3 d-flex align-items-center"> <label className="doted-cond2 mt-2 mr-2" /> High  Risk</p>
      </div>
      <div className=" d-flex justify-content-start  mt-4 mb-4" style={{width: '100%'}}>
        <div className="mr-4 ">
          <h5>Total Debt</h5>
          <p className="mb-0">0.00000000  <small>BTC  $0.0000000</small></p>
          {/* <small> ≈ €0.000000</small> */}
        </div>
        <div className>
          <h5 className="d-flex align-items-center">Profit &amp; Loss:  <div className="form-group w-50 ml-3">
              <select className="form-control-cx search-slt" id="exampleFormControlSelect1">
                <option>Today</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
                <option>Example one</option>
              </select>
            </div></h5>
          <div className="d-flex">
            <p className="mb-0">0.00000000 BTC  (0.00%)   $0.000000 (0.00%)  {/* <small>BTC  $0.0000000</small> */}</p></div>
          <br />
          <a href="#" className="Verified btn-cv-verfy mt-5 mb-4">View Details</a>
          {/* <small> ≈ €0.000000</small> */}
        </div>
      </div>
      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n  a{\n    color: #000;\n  }\n" }} />
      <br />
      <div className="col-md-12 otg deposit-table mb-5">
        <div className="d-flex">
          <div className="d-flex flex-column mr-3"> 
            <h5 className="m-0">Funds</h5>
            <p> coin </p>
          </div>
          <h5> Positions</h5>
        </div>
        <div className="d-flex align-items-baseline">
          <div className="mr-3">
            <form className="card card-sm  mb-4">
              <div className=" row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="bx bx-search" style={{fontSize: 22, marginLeft: 8}} />
                </div>
                {/*end of col*/}
                <div className="col">
                  <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Coin" />
                </div>
                {/*end of col*/}
                {/*end of col*/}
              </div>
            </form></div>
          <div className="mr-3">
            <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            <label htmlFor="vehicle1"> Hide Low Positions</label>
          </div>
          <div className="mr-3">
            <a href="#" style={{color: '#de0d2c'}}>Convert to EXL </a>
          </div>
        </div>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n  .form-control-borderless {\n    border: none;\n}\n\n.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {\n    border: none;\n    outline: none;\n    box-shadow: none;\n}\n\n" }} />
        <div className="table-responsive table-trad">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Coin      </th>
                <th scope="col">          Position     </th>
                <th scope="col">   Positions Value (BTC)   </th>
                <th scope="col" className="text-right">  Index Price(BTC) </th>
                <th scope="col">      Index Price(BTC)    </th>
                <th scope="col">    To Liquidation Price</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>                                                   
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="assets/img/coin1.png" width={30} className="mr-4" />
                    <samp> BTC  Bitcoin     </samp>
                  </div>
                </td>
                <td>     0.0000    </td>
                <td><a href="#" className="red-text"> 0.0000  </a></td>
                <td><a href="#" className="red-text">       /       </a></td>
                <td><a href="#" className="red-text">      /     </a></td>
                <td>    /       </td>
                <td> <a href="#" style={{color: '#de0d2c'}}> Transfer</a> </td>
                <td>  <a href="#" style={{color: '#de0d2c'}}> Borrow/Repay </a></td>
                <td>  <a href="#" style={{color: '#de0d2c'}}> Trade </a></td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex justify-content-between align-items-center">
                    <div src="#" width={30} className="mr-4"> </div>
                    <samp> BTC  Bitcoin     </samp>
                  </div>
                </td>
                <td>     0.0000    </td>
                <td><a href="#" className="red-text"> 0.0000  </a></td>
                <td><a href="#" className="red-text">       /       </a></td>
                <td><a href="#" className="red-text">      /     </a></td>
                <td>    /       </td>
                <td> <a href="#" style={{color: '#de0d2c'}}> Transfer</a> </td>
                <td>  <a href="#" style={{color: '#de0d2c'}}> Borrow/Repay </a></td>
                <td>  <a href="#" style={{color: '#de0d2c'}}> Trade </a></td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="assets/img/coin1.png" width={30} className="mr-4" />
                    <samp> BTC  Bitcoin     </samp>
                  </div>
                </td>
                <td>     0.0000    </td>
                <td><a href="#" className="red-text"> 0.0000  </a></td>
                <td><a href="#" className="red-text">       /       </a></td>
                <td><a href="#" className="red-text">      /     </a></td>
                <td>    /       </td>
                <td> <a href="#" style={{color: '#de0d2c'}}> Transfer</a> </td>
                <td>  <a href="#" style={{color: '#de0d2c'}}> Borrow/Repay </a></td>
                <td>  <a href="#" style={{color: '#de0d2c'}}> Trade </a></td>
              </tr>
            </tbody>
          </table>
          <div className="view-more">
            <p>To read more about marginable assets, marginable pairs and the price index, please refer to <a href="#"> Margin Data</a> </p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</>
      </Fragment>
    );
  }
}

export default Margin_Acc;