import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { post } from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook } from '@fortawesome/free-brands-svg-icons'


const URL = 'http://localhost:2000/';

export const getStaticPaths = async () => {

  const res = await fetch(`${URL}api/vehicle`);
  const posts = await res.json()
  const paths = posts.data.map((post) => {
      return { params: { Vehicle_ID: post.Vehicle_ID.toString(), } }
  })

  return {

      paths: paths,
      fallback: false
  };
}

export const getStaticProps = async (context) => {
  const Vehicle_ID = context.params.Vehicle_ID;

  const request = await fetch(`${URL}api/vehicle/getbyID/${Vehicle_ID}`);
  const post = await request.json();
  if (!post) {
      return {
          notFound: true,
      }
  }
  return {
      props: {
          post,
      },
  }
}

export default function Car({ post }){
    // const router = useRouter()
    // const vehicle = router.query.car

    return(
        <>
        <Head>
            <title />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
                rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />
            <link rel="stylesheet" href="css/aos.css" />
            <link rel="stylesheet" href="css/ionicons.min.css" />
            <link rel="stylesheet" href="css/flaticon.css" />
            <link rel="stylesheet" href="css/icomoon.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <div>
  <section
    className="hero-wrap hero-wrap-2 js-fullheight"
    style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9 ftco-animate pb-5">
          <h1 className="mb-3 bread">Car Details</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-car-details">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="car-details">
            <div
              className="img rounded"
              style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            />
            <div className="text text-center">
              <span className="subheading">{ post.data.Model }</span>
              <h2>{ post.data.Brand}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-dashboard" />
                </div>
                <div className="text">
                  <Container>
                <FontAwesomeIcon icon={faFacebook} /></Container>
                  <h3 className="heading mb-0 pl-3">
                    Mileage
                    <span>40,000</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-pistons" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Transmission
                    <span>Manual</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-car-seat" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Seats
                    <span>5 Adults</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-backpack" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Luggage
                    <span>4 Bags</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services">
            <div className="media-body py-md-4">
              <div className="d-flex mb-3 align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-diesel" />
                </div>
                <div className="text">
                  <h3 className="heading mb-0 pl-3">
                    Fuel
                    <span>Petrol</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pills">
          <div className="bd-example bd-example-tabs">
            <div className="d-flex justify-content-center">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-description-tab"
                    data-toggle="pill"
                    href="#pills-description"
                    role="tab"
                    aria-controls="pills-description"
                    aria-expanded="true"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-manufacturer-tab"
                    data-toggle="pill"
                    href="#pills-manufacturer"
                    role="tab"
                    aria-controls="pills-manufacturer"
                    aria-expanded="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-review-tab"
                    data-toggle="pill"
                    href="#pills-review"
                    role="tab"
                    aria-controls="pills-review"
                    aria-expanded="true"
                  >
                    Review
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-description"
                role="tabpanel"
                aria-labelledby="pills-description-tab"
              >
                <div className="row">
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Airconditions
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Child Seat
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        GPS
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Luggage
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Music
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Seat Belt
                      </li>
                      <li className="remove">
                        <span className="ion-ios-close" />
                        Sleeping Bed
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Water
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Bluetooth
                      </li>
                      <li className="remove">
                        <span className="ion-ios-close" />
                        Onboard computer
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="features">
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Audio input
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Long Term Trips
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Car Kit
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Remote central locking
                      </li>
                      <li className="check">
                        <span className="ion-ios-checkmark" />
                        Climate control
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
        </>
    );
};