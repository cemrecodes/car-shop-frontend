import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Script from "next/Script";


export default function Pricing(){
    return(<>
        <Head>
  <title>Rent A Car</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="css/aos.css" />
  <link rel="stylesheet" href="css/ionicons.min.css" />
  <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
  <link rel="stylesheet" href="css/jquery.timepicker.css" />
  <link rel="stylesheet" href="css/flaticon.css" />
  <link rel="stylesheet" href="css/icomoon.css" />
  <link rel="stylesheet" href="css/style.css" />
    </Head>
    <>
  <section
    className="hero-wrap hero-wrap-2 js-fullheight"
    style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9 ftco-animate pb-5">
          <p className="breadcrumbs">
            <span className="mr-2">
              <a href="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
              Pricing <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">Pricing</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="car-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th className="bg-primary heading">Per Hour Rate</th>
                  <th className="bg-dark heading">Per Day Rate</th>
                  <th className="bg-black heading">Leasing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/car-1.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/car-2.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/car-3.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/car-4.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/car-5.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
                <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/car-6.jpg)" }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>Cheverolet SUV Car</h3>
                    <p className="mb-0 rated">
                      <span>rated:</span>
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 10.99
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 60.99
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="#">Rent a car</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> 995.99
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      <span className="subheading">
                        $3/hour fuel surcharges
                      </span>
                    </div>
                  </td>
                </tr>
                {/* END TR*/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  <Script src="js/jquery.min.js"></Script>
  <Script src="js/jquery-migrate-3.0.1.min.js"></Script>
  <Script src="js/popper.min.js"></Script>
  <Script src="js/bootstrap.min.js"></Script>
  <Script src="js/jquery.easing.1.3.js"></Script>
  <Script src="js/jquery.waypoints.min.js"></Script>
  <Script src="js/jquery.stellar.min.js"></Script>
  <Script src="js/owl.carousel.min.js"></Script>
  <Script src="js/jquery.magnific-popup.min.js"></Script>
  <Script src="js/aos.js"></Script>
  <Script src="js/jquery.animateNumber.min.js"></Script>
  <Script src="js/bootstrap-datepicker.js"></Script>
  <Script src="js/jquery.timepicker.min.js"></Script>
  <Script src="js/scrollax.min.js"></Script>
  <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></Script>
  <Script src="js/google-map.js"></Script>
  <Script src="js/main.js"></Script>
    




</>
    )

}