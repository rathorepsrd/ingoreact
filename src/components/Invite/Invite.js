import React, { Component, Fragment } from 'react';

class Invite extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="invite-bg">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 serch-raund text-center w-100">
          <h3>  Invite Friends.Earn Crypto Together</h3>
          <h5 className="mb-4"> Earn up to 30% commission every time your friends make a trade on Binance.</h5>
          <a href="#" className="detisl-ruls mt-4"> Detailed Rules</a>
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  <div className="container">
    <div className="row p-0 m-0">
      <div className="col-md-12 p-0 m-0">
        <div className="invite-now">
          <div className="text-center">
            <h3 className="mt-3"> Invite now</h3>
            <div className="w-50 m-auto">
              <p> Use your unique link to invite your friends over message or email. Your default invitation code can also be shared in real life or as a screenshot.
              </p>
            </div>
          </div>
          <div className="invite-form d-flex justify-content-center ">
            <div className="d-flex  align-items-center m-auto" style={{width: '100%', overflowX: 'scroll'}}>
              <div className="recive-b ">
                <h4> You Receive:</h4>
                <h5> 0%</h5>
              </div>
              <div className="recive-b">
                <h4> Friend Receive:</h4>
                <h5> 20%</h5>
              </div>
              <div className="recive-b ">
                <h4> Referral Code:</h4>
                <h5> 2K811dR &nbsp;, &nbsp; <a href="#"><i className="bx bx-file-blank" /> </a></h5>
              </div>
              <div className="recive-b mt-1">
                <h4> My referral link:</h4>
                <h5> https://www.bin....44305385<a href="#"> <i className="bx bx-file-blank" /> </a> &nbsp; <label> Note -  &nbsp;<a href="#"> <i className="bx bx-edit-alt" /> </a> </label></h5>
              </div>
              <div className="recive-b d-flex align-items-center">
                <a href="#" className="brn-ivite">Invite Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="invite-now-linke">
            <h5> Generate your link</h5>
            <p className="comisn-text"> Your Base Commission Rate: 20%<br />
              Set Friends’ Commission Kickback Rate:</p>
            <div className="recive-friend d-flex justify-content-around align-items-center ">
              <div className="you-recive">
                <h6>You Receive: </h6>
                <h2>0% </h2>
              </div>
              <div className="verti-line"> </div>
              <div className="you-recive">
                <h6>Friend Receive: </h6>
                <h2>0% </h2>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <div className="text-count"> 0%</div>
              <div className="text-count-no"> 5%</div>
              <div className="text-count-no"> 10%</div>
              <div className="text-count-no"> 15%</div>
              <div className="text-count-no"> 20%</div>
            </div>
            <div className="enter-text">
              <form>
                <label>
                  <p className="label-txt">ENTER YOUR EMAIL</p>
                  <input type="text" className="input" />
                  <div className="line-box">
                    <div className="line" />
                  </div>
                  <p className="label-txt" style={{right: 0, fontSize: 20}}> <i className="bx bx-edit-alt" /> </p>
                </label>
                <div className="custom-radios-1">
                  <div>
                    <input type="checkbox" id="color-1" name="color" defaultValue="color-1" defaultChecked />
                    <label htmlFor="color-1">
                      <span>
                      </span>
                      <a>Set as default invitation code</a>
                    </label>
                  </div>
                </div>
                <a href="#" className="btn-genrate ">Generate your link </a>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="invite-now-linke">
            <h4 className="mt-2"> Your Referral Account</h4>
            <div className="d-flex justify-content-between mt-4">
              <div className="referal-account">
                <h6>Base Commission Rate:</h6>
                <p><b>0%</b> </p>
              </div>
              <div className="referal-account">
                <h6>You Earned:</h6>
                <p><b> 0 BTC</b></p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="referal-account">
                <h6>Total Number of Friends:</h6>
                <p><b>0% </b></p>
              </div>
              <div className="referal-account">
                <h6>Your Ranking:  <a href="#" className="btn-genrate-btn ">Ranking list </a></h6>
                <p><b> &gt;9999</b></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="">
            <div className="remaining-no d-flex justify-content-between mt-5">
              <h4>Your Referral Links List</h4>                          
              <p>Remaining number of promotional links to be created: 19</p>
            </div>
          </div>
          <div className="table-responsive data-table-part">
            <table className="table">
              <thead>
                <tr>
                  <td>Referral ID </td>
                  <td> You Receive / Friends Receive</td>
                  <td>Note</td>
                  <td>Friends </td>
                  <td>Action </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">44305385    </th>
                  <td>    20% / 0%    </td>
                  <td>        -      </td>
                  <td>  0    </td>
                  <td>      Set Default   Copy link     Edit          Invite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12">
          <div className="">
            <div className="remaining-no d-flex justify-content-between mt-5">
              <h4>Your Commission History<br />
                <small>
                  Latest Commission History (One week of commission history displayed by default) </small></h4>    
              <div>             
                <label>  <a href="#" className="expo"> Export </a></label> <label>  <a href="#" className="expo"> Refresh </a></label></div>
            </div>
          </div>
          <div className="table-responsive data-table-part">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th> Account of Friends </th>
                  <th>  Commissions Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">  </th>
                  <td>      </td>
                  <td>         </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12">
          <div className="">
            <div className="remaining-no d-flex justify-content-between mt-5">
              <h4>Commission Fees Shared with You
                <br />
                <small>
                  The commission fees shared with you by the person who invited you to Binance (One week of commission kickback history <br />displayed by default).   </small></h4>    
              <div>             
                <label>  <a href="#" className="expo"> Export </a></label> <label>  <a href="#" className="expo"> Refresh </a></label></div>
            </div>
          </div>
          <div className="data-table-part">
            <table className="table">
              <thead>
                <tr>
                  <th>Refund Amount                                 </th>
                  <th>       </th>
                  <th>               Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">  </th>
                  <td>      </td>
                  <td>         </td>
                  <td>   </td>
                  <td>   </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</>       
      </Fragment>
    );
  }
}

export default Invite;