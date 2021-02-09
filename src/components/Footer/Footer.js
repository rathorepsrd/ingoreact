import React, { Component, Fragment } from 'react';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <>
<div className="container-fluid  p-0 m-0">
  <div className="row p-0 m-0">
    <div className="col-md-12 p-0 m-0">
      <div className="footer-menu d-flex flex-wrap justify-content-center">
        <a href="/support"> SUPPORT </a>
        <a href="/faq"> FAQ </a>
        <a href="/zendesk"> BLOG </a>
        <a href="#"> TERMS AND CONDITIONS </a>
        <a href="#"> PRIVACY POLICY</a>
        <a href="#"> SYSTEM STATUS</a>
        <a href="/market"> MARKETS </a>
        <a href="#">   FEES </a>
        <a href="/api"> API </a>
        <a href="#"> COINS INFO </a>
        <a href="#"> WHITEPAPER </a>
      </div>
    </div>
  </div>
</div>

{/* ======= Footer ======= */}
<footer id="footer">
  <div className="container py-2 " style={{alignItems: 'center'}}>
    <div className="credits">
      © 2018 - 2019 <a href="#" target="_blank" style={{color: '#000'}}>EXCOINCIAL. </a>All rights reserved
    </div>
  </div>
</footer>
</>
      </Fragment>
    );
  }
}

export default Footer;