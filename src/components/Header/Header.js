import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
              <>
{/* ======= Header ======= */}
<header id="header" className="fixed-top header-scrolled">
  <div className=" d-flex align-items-center">
    {/*   <h1 class="logo mr-auto"><a href="index">
     </a></h1> */}
    <a href="index" className="logo mr-5"><img src="assets/img/logo.png" alt="" className="ml-3" /></a>
    <nav className="nav-menu d-none d-lg-block mr-auto">
      <ul>
        <li className="active font-size"><a href="/"><i className="bx bxs-grid" /></a></li>
        <li className="drop-down"><a href="/market">Markets</a>
          <ul>
            <li className="drop-down"><a href="#">About us</a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="/zendesk">News Blogs</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </li>
        <li><a href="/support">Support</a></li>
        <li><a href="#">Exchange</a></li>
        <li><a href="#">Trading</a></li>
        <li><a href="#">P2P DEX</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Vote</a></li>
        <li><a href="#">ICO</a></li>
        <li><a href="#">Buy/Sell</a></li>
        <li><a href="dashbord"><img width={25} src="assets/img/user.png" /></a></li>
        <li className="btn-modal out-border ml-2  mr-2 mb-2 mt-2" style={{padding: 2}}><a href="#team" className="sing-up-btn" data-toggle="modal" data-target="#myModal">Sign in</a></li>
        {/*   <li class="ml-4 btn-modal" style="padding: 2px;"><a href="#team" class="sing-up-btn"  class="sing-up-btn">Sign in</button> </li> */}
        <li className="ml-2  mr-2 btn-modal out-border mb-2 mt-2" style={{padding: 2}}><a href="#team" className="sing-up-btn" data-toggle="modal" data-target="#myModal-sign-up">Sign up</a></li>
        <li><a href="#team"><img width={25} src="assets/img/language.png" /></a></li>
        <li><a href="#team"><img width={25} src="assets/img/half-moon.png" /></a></li>
      </ul>
    </nav>{/* .nav-menu out-border */}
  </div>
</header>{/* End Header */}
</>
<>
{/* The Modal */}
<div className="modal fade" id="myModal">
  <div className="modal-dialog modal-lg ">
    <div className="modal-content login-exto">
      {/* Modal Header */}
      <div className="modal-body">
        <div className="d-box">
          <div className="img-box">
            <img src="assets/img/login-bg.png" alt="logo" className="img-fluid" />
          </div>
          <div className="form-box exto-close">
            <button type="button" className="close" data-dismiss="modal"><img src="assets/img/close.png" width={30} /></button>
            <div className="mt-3 text-center login-heading"><h2> Login</h2>
              <p> Please check that you are visiting the correct URL</p>
              <a href="#" className="btn--lig" target="_blank"> <i className="bx bxs-lock color-text" /> https://excoincial.com/accounts/login</a>
            </div>
            <div id="tabs" className="mt-4">
              <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Email</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Mobile</a>
                </div>
              </nav>
              <div className="tab-content py-1 px-1 px-sm-0" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form className="mt-4">
                    <div className="form-group">
                      <label htmlFor="email">Email </label>
                      <input type="email" className="form-control-extonic" placeholder="testemail@gmail.com" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control-extonic" placeholder="***********" id="password" style={{position: 'relative'}} />
                      <i className="bx bx-show pases-set" />
                    </div>
                    <button type="button" className="button-usd mt-1 mb-4 w-100">LOGIN</button>
                    <div className="form-group forgot bottom-line d-flex justify-content-between ">
                      <a href="#" style={{textDecoration: 'revert'}}>Forgot Password?</a>
                      <span>Not on Excoincial yet? <a href="#" style={{textDecoration: 'revert'}}> Register </a></span>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <form className="mt-4">
                    <label htmlFor="email">Email </label>
                    <div className="form-group input-group">
                      <div className="form-group mr-2">
                        <select className="form-control-extonic" id="make1">
                          <option defaultValue="selected">+91</option>
                          <option >+92</option>
                          <option>+93</option>
                          <option>+00</option>
                        </select>
                      </div>
                      <input name="" className="form-control-extonic w-75" placeholder="Phone number" type="text" />
                    </div> {/* form-group// */}
                    {/*      <div class="form-group">
              <label for="email">Mobile </label>
              <input type="email" class="form-control-extonic" id="email" aria-describedby="emailHelp">
            </div> */}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control-extonic" placeholder="***********" id="password" style={{position: 'relative'}} />
                      <i className="bx bx-show pases-set" />
                    </div>
                    <button type="button" className="button-usd mt-1 mb-2 w-100">LOGIN</button>
                    <div className="form-group forgot bottom-line d-flex justify-content-between ">
                      <a href="#" style={{textDecoration: 'revert'}}>Forgot Password?</a>
                      <span>Not on Excoincial yet? <a href="#" style={{textDecoration: 'revert'}}> Register </a></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
<div className="modal fade" id="myModal-sign-up">
  <div className="modal-dialog modal-lg ">
    <div className="modal-content login-exto">
      {/* Modal Header */}
      <div className="modal-body">
        <div className="d-box">
          <div className="img-box">
            <img src="assets/img/login-bg.png" alt="logo" className="img-fluid" />
          </div>
          <div className="form-box exto-close">
            <button type="button" className="close" data-dismiss="modal"><img src="assets/img/close.png" width={30} /></button>
            <div className="mt-3 text-center login-heading"><h2> Create a free account</h2>
              <p>Welcome to Excoincial</p>
              <a href="#" className="btn--lig" target="_blank"> <i className="bx bxs-lock color-text" /> https://excoincial.com/accounts/login</a>
            </div>
            <div id="tabs" className="mt-4">
              <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Email</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Mobile</a>
                </div>
              </nav>
              <div className="tab-content py-1 px-1 px-sm-0" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form className="mt-4">
                    <div className="form-group">
                      <label htmlFor="email">Email </label>
                      <input type="email" className="form-control-extonic" placeholder="testemail@gmail.com" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="">
                        <input type="password" className="form-control-extonic" placeholder="***********" id="password" />
                        <span className="icn-pass"><i className="bx bx-show" /></span> 
                      </div>
                      {/* pases-set */}
                    </div>
                    <div className="form-group">
                      <div className="btn-group referal-btn">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          <label htmlFor="email">Referral ID (Optional) </label> <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li className="divider" />
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </div>
                      <input type="email" className="form-control-extonic" placeholder="" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className=" form-group align-items-center remember" style={{fontSize: 13}}>
                      <input type="checkbox" /> I have read and agree to the Terms of Service. Excoincial Terms
                    </div>
                    <div className="form-group forgot bottom-line">
                      <center>    <span>Not on Excoincial yet? <a href="#" style={{textDecoration: 'revert'}}> Register </a></span></center> 
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <form className="mt-4">
                    <label htmlFor="email">Email </label>
                    {/* form-group// */}
                    {/*      <div class="form-group">
              <label for="email">Mobile </label>
              <input type="email" class="form-control-extonic" id="email" aria-describedby="emailHelp">
            </div> */}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control-extonic" placeholder="***********" id="password" style={{position: 'relative'}} />
                      <i className="bx bx-show pases-set" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Referral ID (Optional) </label>
                      <input type="email" className="form-control-extonic" placeholder="" id="email" aria-describedby="emailHelp" />
                    </div>
                    <button type="button" className="button-usd mt-1 mb-2 w-100">LOGIN</button>
                    <div className="form-group forgot bottom-line d-flex justify-content-between ">
                      <a href="#" style={{textDecoration: 'revert'}}>Forgot Password?</a>
                      <span>Not on Excoincial yet? <a href="#" style={{textDecoration: 'revert'}}> Register </a></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </Fragment>
    );
  }
}

export default Header;