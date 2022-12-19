import axios from 'axios';
export default function Navbar() {
  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Car<span>Book</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/car" className="nav-link">
                Cars
              </a>
            </li>


            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Account
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/login" class="dropdown-item" >
                    Sign In
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" onClick={() => handleLogOut()}>
                    Sign Out
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/signUp">
                   Sign Up
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Company 
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/company" class="dropdown-item" >
                    Company Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Company's Vehicle
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/addCar">
                   Add Vehicle
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
