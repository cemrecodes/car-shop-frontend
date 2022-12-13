import Head from "next/head";
import Image from 'next/image'
import Script from 'next/Script'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

import { useState, useEffect } from "react";




export const getStaticProps = async () => {
    const [operationsRes, incidentsRes] = await Promise.all([
       // fetch('http://localhost:3000/api/getWebrazzi'),
        fetch('http://localhost:3000/api/shiftdelete')
    ]);
   
    const [operations, incidents] = await Promise.all([
        operationsRes.json(),
        incidentsRes.json()
    ]);
    return { props: { operations, incidents } };
}
const Home = ({ operations, incidents }) => {
    const [render, setRender] = useState(false);
   

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <><div className="px-4 mx-auto bg-gray-400 bg-opacity-25 max-w-7xl sm:px-6 lg:px-8 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="">{
                <div className="relative px-4 pt-16 pb-20 bg-gray-600 bg-opacity-25 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white bg-opacity-50 h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative mx-auto max-w-7xl">


                        <div className="grid gap-5 mt-0 mt-12 transform -translate-y-12 bg-white bg-opacity-20 w-lg mx-18 lg:grid-cols-3 lg:max-w-none">
                    
                            {incidents.result.map((post) => (
                                <div
                                    key={post.title}
                                    className="flex flex-col items-center max-w-md overflow-hidden bg-gray-200 rounded-lg shadow-lg bg-opacity-10"
                                >
                                    <a href={post.url}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col min-h-full pb-4 mb-6 transition-all duration-150 bg-transparent bg-gray-100 bg-opacity-50 rounded-lg shadow-lg hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    <Image
                                                        src={post.image}
                                                        width='75'
                                                        height='25'
                                                        alt="Blog Cover"
                                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    />

                                                    <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                        <div className="flex flex-row items-center">
                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500">
                                                                {post.category}
                                                            </div>

                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                            <div className="flex flex-row items-center text-xs font-medium text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="flex flex-wrap items-center flex-1 px-4 py-1 mx-auto text-center">
                                                        <div href="#" className="hover:underline">
                                                            <h2 className="text-2xl font-bold tracking-normal text-orange-700">
                                                                {post.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="border-white-300" />
                                                    <div className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                                        {post.title}
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="px-4 py-2 mt-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center flex-1">
                                                                <div className="flex flex-col mx-2">
                                                                    <div
                                                                        href=""
                                                                        className="font-semibold text-gray-700 hover:underline"
                                                                    >
                                                                        {post.yazar}
                                                                    </div>
                                                                    <div className="text-xs text-gray-600">
                                                                        date
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            ))}
                       
                            {operations.result.map((post) => (
                                <div
                                    key={post.title}
                                    className="flex flex-col items-center max-w-md overflow-hidden bg-gray-400 rounded-lg shadow-lg bg-opacity-10"
                                >
                                    <a href={post.url}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col min-h-full pb-4 mb-6 transition-all duration-150 bg-transparent bg-gray-100 rounded-lg shadow-lg bg-opacity-10 hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    <Image
                                                        src={post.image}
                                                        width='75'
                                                        height='25'
                                                        alt="Blog Cover"
                                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    />

                                                    <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                        <div className="flex flex-row items-center">
                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500">
                                                                {post.category}
                                                            </div>

                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                            <div className="flex flex-row items-center text-xs font-medium text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="flex flex-wrap items-center flex-1 px-4 py-1 mx-auto text-center">
                                                        <div href="#" className="hover:underline">
                                                            <h2 className="text-2xl font-bold tracking-normal text-orange-700">
                                                                {post.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="border-white-300" />
                                                    <div className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                                        {post.title}
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="px-4 py-2 mt-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center flex-1">
                                                                <div className="flex flex-col mx-2">
                                                                    <div
                                                                        href=""
                                                                        className="font-semibold text-gray-700 hover:underline"
                                                                    >
                                                                        {post.yazar}
                                                                    </div>
                                                                    <div className="text-xs text-gray-600">
                                                                        date
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            ))} </div>
                       
                    </div>
                </div>}</div>
        </div>
        </>
        
    );
}

export default Home;


// export default function Car(){
//     return(
//         <>
//         <Head>
//         <>
//   <title>Rent A Car</title>
//   <meta charSet="utf-8" />
//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1, shrink-to-fit=no"
//   />
//   <link
//     href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
//     rel="stylesheet"
//   />
//   <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
//   <link rel="stylesheet" href="css/animate.css" />
//   <link rel="stylesheet" href="css/owl.carousel.min.css" />
//   <link rel="stylesheet" href="css/owl.theme.default.min.css" />
//   <link rel="stylesheet" href="css/magnific-popup.css" />
//   <link rel="stylesheet" href="css/aos.css" />
//   <link rel="stylesheet" href="css/ionicons.min.css" />
//   <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
//   <link rel="stylesheet" href="css/jquery.timepicker.css" />
//   <link rel="stylesheet" href="css/flaticon.css" />
//   <link rel="stylesheet" href="css/icomoon.css" />
//   <link rel="stylesheet" href="css/style.css" />
// </>


//         </Head>        
//         <>
//   <section
//     className="hero-wrap hero-wrap-2 js-fullheight"
//     style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
//     data-stellar-background-ratio="0.5"
//   >
//     <div className="overlay" />
//     <div className="container">
//       <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
//         <div className="col-md-9 ftco-animate pb-5">
//           <p className="breadcrumbs">
//             <span className="mr-2">
//               <a href="index.html">
//                 Home <i className="ion-ios-arrow-forward" />
//               </a>
//             </span>{" "}
//             <span>
//               Cars <i className="ion-ios-arrow-forward" />
//             </span>
//           </p>
//           <h1 className="mb-3 bread">Choose Your Car</h1>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="ftco-section bg-light">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-1.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-2.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Range Rover</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Subaru</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-3.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-4.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-5.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Range Rover</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Subaru</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-6.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-7.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-8.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Range Rover</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Subaru</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-9.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-10.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-11.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Range Rover</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Subaru</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="car-wrap rounded ftco-animate">
//             <div
//               className="img rounded d-flex align-items-end"
//               style={{ backgroundImage: "url(images/car-12.jpg)" }}
//             ></div>
//             <div className="text">
//               <h2 className="mb-0">
//                 <a href="car-single.html">Mercedes Grand Sedan</a>
//               </h2>
//               <div className="d-flex mb-3">
//                 <span className="cat">Cheverolet</span>
//                 <p className="price ml-auto">
//                   $500 <span>/day</span>
//                 </p>
//               </div>
//               <p className="d-flex mb-0 d-block">
//                 <a href="#" className="btn btn-primary py-2 mr-1">
//                   Book now
//                 </a>{" "}
//                 <a
//                   href="car-single.html"
//                   className="btn btn-secondary py-2 ml-1"
//                 >
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-5">
//         <div className="col text-center">
//           <div className="block-27">
//             <ul>
//               <li>
//                 <a href="#">&lt;</a>
//               </li>
//               <li className="active">
//                 <span>1</span>
//               </li>
//               <li>
//                 <a href="#">2</a>
//               </li>
//               <li>
//                 <a href="#">3</a>
//               </li>
//               <li>
//                 <a href="#">4</a>
//               </li>
//               <li>
//                 <a href="#">5</a>
//               </li>
//               <li>
//                 <a href="#">&gt;</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>     
        
        
//         </>


//     )

// }