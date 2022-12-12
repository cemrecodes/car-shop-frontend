import Head from "next/head";
import Image from 'next/image'
import Script from 'next/Script'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

export default function Car(){
    return(
        <>
        <Head>
        <>
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
</>


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
              Cars <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">Choose Your Car</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-1.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-2.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Range Rover</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Subaru</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-3.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-4.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-5.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Range Rover</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Subaru</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-6.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-7.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-8.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Range Rover</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Subaru</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-9.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-10.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-11.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Range Rover</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Subaru</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="car-wrap rounded ftco-animate">
            <div
              className="img rounded d-flex align-items-end"
              style={{ backgroundImage: "url(images/car-12.jpg)" }}
            ></div>
            <div className="text">
              <h2 className="mb-0">
                <a href="car-single.html">Mercedes Grand Sedan</a>
              </h2>
              <div className="d-flex mb-3">
                <span className="cat">Cheverolet</span>
                <p className="price ml-auto">
                  $500 <span>/day</span>
                </p>
              </div>
              <p className="d-flex mb-0 d-block">
                <a href="#" className="btn btn-primary py-2 mr-1">
                  Book now
                </a>{" "}
                <a
                  href="car-single.html"
                  className="btn btn-secondary py-2 ml-1"
                >
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">&gt;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>     
        
        
        </>


    )

}