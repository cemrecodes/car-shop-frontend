import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// export const getStaticProps = async () => {
//     const request = await fetch(
//         `http://localhost:2000/api/customers`
//     );
//     const customers = await request.json();
    
//     return {
//         props: {
//             customers,
//         },
//     };
// }



const Login = ({}) => {
  //  const router = useRouter();
  // const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        // Get the email and password values from the form
        const Email = event.currentTarget.email.value;
        const Password = event.currentTarget.password.value;
        let item={Email,Password}

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(item);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:2000/api/customers/login", requestOptions)
          .then(response => response.text())
          .then(result => (console.log(result), alert(result)) )
          .catch(error => console.log('error', error));
        
        }
          
      
        

// Convert the users variable to an array
// const customersArray = Array.from(customers.data);
//         console.log(customersArray);
//         const hasMatch = customersArray.some(
//             (customer) => customer.Email=== email && customer.Password === password
//         );

//         console.log(hasMatch);
//         // If a user was found, set a cookie and redirect to the dashboard
//         if (hasMatch) {
            

//             router.push('/');
//         } else {
//             // If no user was found, show an error
//             setError('Invalid email or password');
//         }
    

    return (
        <><Head>
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
        

        <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Sign In</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-5">
        <div className="wrap">
          <div
            className="img"
            style={{ backgroundImage: "url(images/bg-1.jpg)" }}
          />
          <div className="login-wrap p-4 p-md-5">
            <form action="#" className="signin-form" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="email">
                  Email
                </label>
                <input type="email" className="form-control" name="email" required="" />
              </div>
              <div className="form-group">
              <label className="form-control-placeholder" htmlFor="password">
                  Password
                </label>
                <input
                  id="password-field"
                  type="password"
                  className="form-control"
                  required=""
                  name='password'
                />                
              </div>
              <div className="form-group" >
              {/* {error && <p>{error}</p>} */}
                <button
                  type="submit"
                  className="form-control btn btn-primary rounded submit px-3"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center">
              Not a member?{" "}
              <a data-toggle="tab" href="/signUp">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   
            
            </>
            
    );
};

export default Login;