import React, { Component, Fragment } from 'react';

class Faq extends Component {
  render() {
    return (
      <Fragment>
        <>
  {/* ======= Hero Section ======= */}
  <section id="history-by"> 
  </section>
  <section id="send-request-faq">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 serch-raund text-crt-faq">
          <center><h3> <b> Welcome!</b> How can we help? </h3></center>
          <form action="#" method="#" role="search" className="m-auto">
            <div className="row">
              <div className=" col-md-9">
                <div className="input-group" style={{position: 'relative'}}>
                  <input className="form-control" placeholder="Find an answers..." name="srch-term" id="ed-srch-term" type="text" />
                </div></div>
              <div className="col-md-3">
                <div className="input-group-btn m-auto">
                  <button type="submit" id="searchbtn">
                    SEARCH</button>
                </div>
              </div>
            </div>
          </form>
          {/*  <center> <p class="mt-2"> Popular Searches: Account Setup, Trading</p></center> */}
        </div>
      </div>
    </div>
  </section>
  <section className="p-0">
    <div className="container">
      <div className="row ">
        <div className="col-md-10 m-auto">
          <div className="row">
            <div className="col-md-6">
              <div className="faq-qustion">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link faq-qustion-btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What are the charges for trading on EXCOINCIAL? 
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapsetow" aria-expanded="true" aria-controls="collapseOne">
                          What are the charges for trading on EXCOINCIAL? 
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapsetow" className="collapse" aria-labelledby="collapsetow" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingthree">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapsethree" aria-expanded="true" aria-controls="collapseOne">
                          What is Margin Trading?
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapsethree" className="collapse" aria-labelledby="collapsethree" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link faq-qustion-btn" data-toggle="collapse" data-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                          What other benefits are there in EXCOINCIAL 
                          for Non-Active Traders?
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapsefive" aria-expanded="true" aria-controls="collapseOne">
                          What are the charges for trading on EXCOINCIAL? 
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapsefive" className="collapse" aria-labelledby="collapsefive" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingthree">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapsesix" aria-expanded="true" aria-controls="collapseOne">
                          So then how secure is EXCOINCIAL?
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapsesix" className="collapse" aria-labelledby="collapsesix" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-qustion">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingseven">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapseseven" aria-expanded="true" aria-controls="collapseOne">
                          So then how secure is EXCOINCIAL?
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapseseven" className="collapse" aria-labelledby="collapseseven" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingseven">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapseeight" aria-expanded="true" aria-controls="collapseOne">
                          So then how secure is EXCOINCIAL?
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapseeight" className="collapse" aria-labelledby="collapseeight" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingnine">
                      <h5 className="mb-0 faq-qustion-btn">
                        <button className="btn btn-link " data-toggle="collapse" data-target="#collapsesnine" aria-expanded="true" aria-controls="collapseOne">
                          So then how secure is EXCOINCIAL?
                        </button>
                        <i className="bx bxs-chevron-right-circle" />
                      </h5>
                    </div>
                    <div id="collapsenine" className="collapse" aria-labelledby="collapsenine" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="p-0">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <section className="regular slider">
            <div>
              <img src="assets/img/c1.png" />
            </div>
            <div>
              <img src="assets/img/c2.png" />
            </div>
            <div>
              <img src="assets/img/c3.png" />
            </div>
            <div>
              <img src="assets/img/c1.png" />
            </div>
            <div>
              <img src="assets/img/c2.png" />
            </div>
            <div>
              <img src="assets/img/c3.png" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</>
      </Fragment>
    );
  }
}

export default Faq;