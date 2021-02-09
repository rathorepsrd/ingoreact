import React, { Component, Fragment } from 'react';

class Zendesk extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="send-request">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 serch-raund">
          <form action="#" method="#" role="search" className="mr-auto">
            <div className="input-group" style={{position: 'relative'}}>
              <input className="form-control" placeholder="Find an answers..." name="srch-term" id="ed-srch-term" type="text" />
              <div className="input-group-btn">
                <button type="submit" id="searchbtn">
                  SEARCH</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  <section className="re-form">
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="row">
            <div className="col-md-4">
              <div className="zen-bg zen-bg-text">
                <h2>Announcements </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-2 zen-bg-text">
                <h2>Account &amp; Security </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-3 zen-bg-text">
                <h2>Crypto Deposit/Withdraw </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-4 zen-bg-text">
                <h2>Fiat Business </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-5 zen-bg-text">
                <h2>Spot &amp; Margin Trading </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-6 zen-bg-text">
                <h2>Futures Contracts </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-7 zen-bg-text">
                <h2>Mining </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-8 zen-bg-text">
                <h2>Options </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="zen-bg-9 zen-bg-text">
                <h2>Earn &amp; Others </h2>
              </div>
            </div>
            <div className="col-md-12  text-center">
              <button type="button" className="btn-trand m-auto"> Leveraged Tokens</button>
            </div>
            <div className="col-md-12">
              <div className="blog-text mt-4">
                <h3> Recent activity</h3>
                <div className="mt-4">
                  <h5>  Latest News</h5>
                  <div className="d-flex justify-content-between blog-text-cv">
                    <h5>  Binance Will Migrate FAQ and Announcement Centers</h5>
                    <div className="artical-text">
                      <label>  Article created 3 months ago</label>   
                      <label className="img-svg-chat"> <img src="assets/img/bx-message-check.svg" /> </label> 
                      <label> 0 </label></div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5>  Latest News</h5>
                  <div className="d-flex justify-content-between blog-text-cv">
                    <h5>  Binance Will Migrate FAQ and Announcement Centers</h5>
                    <div className="artical-text">
                      <label>  Article created 3 months ago</label>   
                      <label className="img-svg-chat"> <img src="assets/img/bx-message-check.svg" /> </label> 
                      <label> 0 </label></div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5>  Latest News</h5>
                  <div className="d-flex justify-content-between blog-text-cv">
                    <h5>  Binance Will Migrate FAQ and Announcement Centers</h5>
                    <div className="artical-text">
                      <label>  Article created 3 months ago</label>   
                      <label className="img-svg-chat"> <img src="assets/img/bx-message-check.svg" /> </label> 
                      <label> 0 </label></div>
                  </div>
                </div>
                <div className="col-md-12 mt-3 p-0 ">
                  <a href="#" className="see-blog "> See More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>
  <section className="p-2 foter-blog">
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto p-3">
          <div className="footer-more">
            <label> Have more questions?</label> <a href="send-request" style={{color: '#de0d2c'}}> submit a request </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

      </Fragment>
    );
  }
}

export default Zendesk;