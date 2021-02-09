import React, { Component, Fragment } from 'react';
import './Home.css';
import $ from "jquery";
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
  componentDidMount(){
    $(document).on('ready', function() {
    
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });
  }
  render() {
    return (
      <Fragment>
              <>
        {/* ======= Hero Section ======= */}
        <section id="hero">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className=" d-flex align-items-center justify-content-center mt-5">
                  <div className="rating-text">
                    <p>See our 17 reviews on </p>
                    <img src="assets/img/star.png" width={40} className="mt-2 mb-2" /> <label>Trustpilot</label>
                  </div>
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                  <div className="rating">
                    <input type="radio" id="star10" name="rating" defaultValue={10} /><label htmlFor="star10" title="Rocks!" />
                    <input type="radio" id="star9" name="rating" defaultValue={9} /><label htmlFor="star9" title="Rocks!" />
                    <input type="radio" id="star8" name="rating" defaultValue={8} /><label htmlFor="star8" title="Pretty good" />
                    <input type="radio" id="star7" name="rating" defaultValue={7} /><label htmlFor="star7" title="Pretty good" />
                    <input type="radio" id="star6" name="rating" defaultValue={6} /><label htmlFor="star6" title="Meh" />
                  </div>
                </div>
                <div className="heading-slider mt-4">
                  <h2>The most <span>TRUSTED</span> platform for
            trading <span> FIAT</span> &amp; <span> CRYPTOCURRENCIES</span> </h2>
                  <p className="mt-3 text-small-sl"> We offer newbies and professional traders the possibility to trade  a variety of digital
            assets on a highly secure, insurance backed Exchange platform.</p>
                </div>
                <center> <button type="button" className="button-usd mt-2 mb-5">BUY BTC</button></center>
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
      </>
      <div className="col-md-8 offset-md-2">
  <div className="want-buy-box">
    <div className="d-flex flex-wrap justify-content-center search-filter">
      <form className="row w-100">
        <div className="col-md-6">
          <div className="want-spend">
            <h4> I want to spend</h4>
            <div className="input-group">
              <input type="text" className="form-control" aria-label="Text input with dropdown button" style={{height: 41}} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle buy-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">NSD</a>
                  <a className="dropdown-item" href="#">RS</a>
                </div>
              </div>
            </div>
          </div></div>
        <div className="col-md-3">
          <div className="want-buy">
            <h4> I want to Buy</h4>
            <div className="input-group">
              <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle buy-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">NSD</a>
                  <a className="dropdown-item" href="#">RS</a>
                </div>
              </div>
            </div>
          </div></div>
        <div className="col-md-3">
          <div className="btn-btc ">
            <button type="button" className="button-usd mt-4">BUY BTC</button>
          </div></div>
      </form>
    </div>
  </div>
</div>
<section className="last-price">
  <div className="container">
    <div className="row">
      <div className="col-md-10 offset-md-1 mt-top">
        <div className="table-responsive table-trad">
          <table className="table">
            <thead>
              <tr>
                <th width="40%" scope="col">Name</th>
                <th width="20%" scope="col">Last price</th>
                <th width="20%" scope="col">24h Change </th>
                <th width="20%" scope="col" className="text-right"> Markets</th>
              </tr>                                                   
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="">
                    <img src="assets/img/coin1.png" className="mr-4" />
                    <samp> BTC (Bitcoin)</samp>
                  </div>
                </td>
                <td>$ 9,566.23</td>
                <td><a href="#" className="red-text"> +1.88%</a></td>
                <td> <img src="assets/img/line-bar.jpg" /></td>
              </tr>
              <tr>
                <td>
                  <div className="">
                    <img src="assets/img/coin1.png" className="mr-4" />
                    <samp> BTC (Bitcoin)</samp>
                  </div>
                </td>
                <td>$ 237.50  </td>
                <td><a href="#" className="red-text"> +1.88%</a></td>
                <td> <img src="assets/img/line-bar.jpg" /></td>
              </tr>
              <tr>
                <td>
                  <div className="">
                    <img src="assets/img/coin1.png" className="mr-4" />
                    <samp> BTC (Bitcoin)</samp>
                  </div>
                </td>
                <td>$ 0.205670</td>
                <td><a href="#" className="red-text"> +1.88%</a></td>
                <td> <img src="assets/img/line-bar.jpg" /></td>
              </tr>
            </tbody>
          </table>
          <div className="view-more">
            <a href="#"> View more markets &gt;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<>
<section className="slider-bg">
<div className="container">
  <div className="row">
    <div className="col-md-10 offset-md-1">
      <section className="regular slider pt-3 pb-4 ">
<Carousel>
  <Carousel.Item>
  <div className="bg-img-slider-1"></div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="bg-img-slider-2"></div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="bg-img-slider-3"></div>
  </Carousel.Item>
</Carousel>
</section></div></div></div></section>
  <section className="latest-bg">
    <div className="container">
      <div className="row">
        <div className="heading-latest-new col-md-12"><h3 className="mb-4"> Latest News</h3> </div>
        <div className="col-md-3">
          <div className="latest-box">
            <h4> Crypto can I use<br />
              to purchase</h4>
            <div className="d-flex justify-content-between mb-4 mt-1">
              <samp>15june,2020 </samp>
              <samp>3 min</samp>
            </div>
            <p> Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.</p>
            <a href="#" className=""> Read more...</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="latest-box">
            <h4> Crypto can I use<br />
              to purchase</h4>
            <div className="d-flex justify-content-between mb-4 mt-1">
              <samp>15june,2020 </samp>
              <samp>3 min</samp>
            </div>
            <p> Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.</p>
            <a href="#" className=""> Read more...</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="latest-box">
            <h4> Crypto can I use<br />
              to purchase</h4>
            <div className="d-flex justify-content-between mb-4 mt-1">
              <samp>15june,2020 </samp>
              <samp>3 min</samp>
            </div>
            <p> Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.</p>
            <a href="#" className=""> Read more...</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="latest-box">
            <h4> Crypto can I use<br />
              to purchase</h4>
            <div className="d-flex justify-content-between mb-4 mt-1">
              <samp>15june,2020 </samp>
              <samp>3 min</samp>
            </div>
            <iframe width={220} height={100} src="https://www.youtube.com/embed/Um63OQz3bjo" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <a href="#" className=""> Read more...</a>
          </div>
        </div>
        <a href="#" className="view-more-newa mt-5"> Buy EXL </a>
      </div>
    </div></section>
  <section className="feature-bg">
    <div className="container">
      <div className="row">
        <div className="heading-features col-md-12"><h3 className="mb-4">FEATURES</h3> </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/wallter.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L1.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L0001.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L112.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/tra.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/Layer-27.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L12.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L13.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L14.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L15.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L00011.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L16.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/peb.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/L17.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/(Trazado).png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-type">
            <img src="assets/img/Layer-28.png" className="mr-3" />
            <p>Highly secured<br />
              users wallets </p>
          </div>
        </div>
      </div>
    </div></section>
  <section className="how-it-bg">
    <div className="container">
      <div className="row">
        <div className="how-it col-md-12"><h3 className="mb-4">HOW IT WORKS</h3> </div>
        <div className="col-md-4 m-auto">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="work-box">1 </div>
            <img src="assets/img/line-vertical.png" className="line-posit" />
          </div>
          <div className="wor-text">
            <h3> SIGNUP</h3>
            <p> Sign up and get registered with the Exchange. Once you have registered, wait for email confirmation and follow the KYC process. As soon as your account is confirmed log in and start seamless trading with over 80+ listed fiat currency and cryptocurrency pairs to choose from.</p>
          </div>
        </div>
        <div className="col-md-4 m-auto">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="work-box">2 </div>
            <img src="assets/img/line-vertical.png" className="line-posit" />
          </div>
          <div className="wor-text">
            <h3> SUBMIT KYC
            </h3>
            <p> When you login, simply go to profile page and complete your KYC verification process and allow our Customer Documents Management and Compliance Team to verify and approve your documents using our AML supportive system.</p>
          </div>
        </div>
        <div className="col-md-4 m-auto">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="work-box">3 </div>
            <img src="assets/img/line-vertical.png" className="line-posit" />
          </div>
          <div className="wor-text">
            <h3> START TRADING
            </h3>
            <p>EXCOINCIAL is a user-driven exchange with a friendly and welcoming user-interface. Registered users get access to all our advanced features at no extra cost. Trading on EXCOINCIAL is as easy as getting started. In three simple steps you can start trading today!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="logo-company-bg">
    <div className="container">
      <div className="row">
        <div className=" col-md-12"><h3 className="mb-4">PARTNERS</h3> </div>
        <div className="logo-main d-flex flex-wrap align-items-center justify-content-between m-auto">
          <div className="logo-box">
            <img src="assets/img/logo1.png" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo2.png" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo3.png" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo4.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo5.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo6.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo7.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo8.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo9.png" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo10.jpg" />
          </div>
          <div className="logo-box" style={{border: 'none'}}>
          </div>
          <div className="logo-box">
            <img src="assets/img/Layer-40.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo12.jpg" />
          </div>
          <div className="logo-box">
            <img src="assets/img/logo14.jpg" />
          </div>
          <div className="logo-box " style={{border: 'none'}}>
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

export default Home;