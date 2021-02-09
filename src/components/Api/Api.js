import React, { Component, Fragment } from 'react';

class Api extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="document-bg">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 serch-raund text-center w-100">
          <h3>  API  Documentation Store</h3>
          <h5> API Documentation  web page</h5>
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="search-sec">
          <form action="#" method="post" noValidate="novalidate">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="row document-search">
                  <div className="col-lg-5 col-md-4 col-sm-12 p-1">
                    <div className="span12 ">
                      <div className="input-append span12">
                        <input type="text" className="search-query search-slt" placeholder="Search" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 p-1 ">
                    <select className="form-control search-slt mr-1" id="exampleFormControlSelect1">
                      <option>Select Vehicle</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12 p-1 ">
                    <button type="button" className="btn btn-primary wrn-btn mr-1">Search</button>
                  </div>
                </div>
              </div>
            </div></form>
        </div>
      </div>
    </div>
  </div>
  <div className="tab-credent">
    <div id="tabs" className="project-tab">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab1" data-toggle="tab" href="#nav-home1" role="tab" aria-controls="nav-home1" aria-selected="true">Spot/Margin/Savings/Mining </a>
                <a className="nav-item nav-link" id="nav-profile1-tab" data-toggle="tab" href="#nav-profile1" role="tab" aria-controls="nav-profile1" aria-selected="false">USDT-Ⓜ Futures </a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">COIN-Ⓜ Futures</a>
                <a className="nav-item nav-link" id="nav-profile1-tab" data-toggle="tab" href="#nav-profile1" role="tab" aria-controls="nav-profile1" aria-selected="false">USDT-Ⓜ Futures testnet </a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">COIN-Ⓜ Futures testnet</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home1" role="tabpanel" aria-labelledby="nav-home-tab1">
        <div className="row m-0 p-0">
          <div className="col-md-3  p-0">
            <div className="app-nav">
              <h4>All API </h4>
            </div>
            <div className="log-bar-list">
              <ul> 
                <li> <a href="#">Change Log </a></li>
                <li> <a href="#">Introduction </a></li>
                <li> <a href="#"> General Info</a></li>
                <li> <a href="#">Wallet Endpoints </a></li>
                <li> <a href="#"> Sub-Account Endpoints</a></li>
                <li> <a href="#">
                    Market Data Endpoints </a></li>
                <li> <a href="#">
                    Websocket Market Streams </a></li>
                <li> <a href="#"> 
                    Spot Account/Trade</a></li>
                <li> <a href="#">
                    Margin Account/Trade </a></li>
                <li> <a href="#"> 
                    User Data Streams</a></li>
                <li> <a href="#">
                    Savings Endpoints </a></li>
                <li> <a href="#">
                    Mining Endpoints </a></li>
                <li> <a href="#"> Futures</a></li>
                <li> <a href="#">Error Codes </a></li>
                <li> <a href="#">Notes </a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 p-0">
            <div className="side-blog text-log">
              <h4>Change Log </h4>
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li>outboundAccountInfo will be removed in the future. (Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
            <div className="side-blog">
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li>outboundAccountInfo will be removed in the future. (Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
            <div className="side-blog ">
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li>outboundAccountInfo will be removed in the future. (Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
            <div className="side-blog">
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li> outboundAccountInfo will be removed in the future. (Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
            <div className="side-blog">
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li> outboundAccountInfo will be removed in the future. (Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
            <div className="side-blog">
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li> outboundAccountInfo will be removed in the future.(Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
            <div className="side-blog">
              <h5>2020-09-09 </h5>
              <h6> USER DATA STREAM</h6>
              <ul>
                <li> outboundAccountInfo has been deprecated.</li>
                <li> outboundAccountInfo will be removed in the future. (Exact date unknown) Please use outboundAccountPosition instead.</li>
                <li> outboundAccountInfo will now only show the balance of non-zero assets and assets that have been reduced to 0.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile1-tab">
        <h4>xxxxxxxx </h4>
      </div>
      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <h4>yyyyyyyyyy </h4>
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

export default Api;