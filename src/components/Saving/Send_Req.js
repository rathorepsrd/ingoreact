import React, { Component, Fragment } from 'react';

class Send_Req extends Component {
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
        <div className="col-md-8 m-auto">
          <div className="d-flex excoincial-bradcam">
            <a href="#"> Excoincial</a>
            <a href="#"> <i className="bx bxs-chevron-right" /></a>
            <a href="#"> Submit a request </a>
          </div>
          <div className="warning-text">
            <p> <b>Warm reminder:</b> For prompt support, kindly reach out to our Online Chat Support by clicking the chatbox icon on the bottom right corner. If you wish to get a reply via ticket support, please be advised that there might be a delay as we are currently experiencing a large backlog of requests.</p>
          </div>
          <form className="req-fro mt-3 mb-5">
            <h3> Submit a request</h3>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <p>Please select your issue below.</p>
                <select className="form-control">
                  <optgroup label="Swedish Cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-md-12 col-sm-12">
                <p>Language*</p>
                <select className="form-control">
                  <optgroup label="Swedish Cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-md-12 col-sm-12">
                <p>Subject*</p>
                <input type="text" name="username" className="span3 form-control" />
              </div>
              <div className="col-md-12 col-sm-12">
                <p>Description*</p>
                <textarea id="w3review" name="w3review" rows={6} cols={50} defaultValue={"\n"} />
                <small>Please enter the details of the request. Our support staff will respond it as soon as possible.</small>
              </div>
              <div className="col-md-12 col-sm-12 mt-2">
                <p>Your Email Address.*</p>
                <input type="text" name="username" className="span3 form-control" />
                <small>Please enter thePlease enter your email address.</small>
              </div>
              <div className="col-md-12 col-sm-12">
                <p>Cellphone Number</p>
                <input type="text" name="username" className="span3 form-control" />
                <small>Please enter your email address.</small>
              </div>
              <div className="col-md-12 col-sm-12">
                <p>Attachments</p>
                <input type="file" className="upld-file form-control-extonic" />
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="warning-text">
                  <p><b>Warm reminder:</b> For prompt support, kindly reach out to our Online Chat Support by clicking the chatbox icon on the bottom right corner. If you wish to get a reply via ticket support, please be advised that there might be a delay as we are currently experiencing a large backlog of requests.</p>
                </div></div>
            </div>
          </form>
          <div className="col-md-7 col-sm-7 m-auto mb-5">
            <button type="submit" id="searchbtn" className="mb-5">
              SEARCH</button>
          </div>
          <br /><br />    <br /><br />    <br /><br />  
        </div>
      </div>
    </div>
  </section>
</>

      </Fragment>
    );
  }
}

export default Send_Req;