import mizuxe from "ic:canisters/mizuxe";
import * as React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      profile: {},
      results: [],
      amount: 0,
      modal: false,
      modalInfo: "",
    };
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info,
    });
  };

  async componentDidMount() {
    const userId = await mizuxe.getOwnId();

    console.log("user id is: " + userId);

    let result = {};
    let all = [];

    if (userId) {
      result = await mizuxe.get(userId);
      console.log(result);
      all = await mizuxe.getConnections(userId);
      console.log(all);
    }

    document.getElementById("firstname").value = result.firstName;
    document.getElementById("lastname").value = result.lastName;
    document.getElementById("mailing1").value = result.mailing1;
    document.getElementById("mailing2").value = result.mailing2;
    document.getElementById("zipcode").value = result.zipcode;
    document.getElementById("city").value = result.city;
    document.getElementById("state").value = result.state;
    document.getElementById("email").value = result.email;
    document.getElementById("phone").value = result.phone;
  }

  async updateProfile() {
    const userId = await mizuxe.getOwnId();

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let mailing1 = document.getElementById("mailing1").value;
    let mailing2 = document.getElementById("mailing2").value;
    let zipcode = document.getElementById("zipcode").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let amount = parseInt(document.getElementById("amount").value);

    await mizuxe
      .update({
        id: userId,
        firstName,
        lastName,
        mailing1,
        mailing2,
        zipcode,
        city,
        state,
        email,
        phone,
        amount,
      })
      .then(() => {
        console.log("Profile successfully created");
      });

    const data = {
      name: "Team Mizuxe",
      email: "admin@mikoaro.com",
      demail: email,
      subject: `${"$" + amount} Donation Received`,
      message: `Thank you for your donation, ${firstName + " " + lastName}!`,
    };

    console.log(data);

    await fetch("https://mizuxe-api.herokuapp.com/send", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async updateForm() {}

  onClick10k = () => {
    this.setState({
      value: 10000,
    });
  };
  onClick5k = () => {
    this.setState({
      value: 5000,
    });
  };
  onClick25 = () => {
    this.setState({
      value: 2500,
    });
  };
  onClick1k = () => {
    this.setState({
      value: 1000,
    });
  };

  render() {
    return (
      <div>
        {/* Home section starts here */}

        <nav class="navbar navbar-expand-xl navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                width="50"
                height="50"
                src="https://dfinitybucket.s3.us-east-2.amazonaws.com/newlogo.png"
              />{" "}
              <h3 class="d-inline align-middle">Mizuxe</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Getting Started
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    App Search
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Communities
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Users
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href={"#opening"}
                    id="navbarDropdownMenuLink"
                  >
                    Donate
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Review System
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <form class="d-flex">
            <a
              href="#opening"
              type="button"
              style={{ marginRight: "10px" }}
              class="btn btn-outline-primary btn-round-lg btn-lg"
            >
              Donate
            </a>
            {/* <button class="btn btn-outline-success btn-round-lg btn-lg" type="submit">Search</button> */}
          </form>
        </nav>
        <section
          style={{
            textAlign: "center",
            height: "80vh",
            padding: "130px 0px",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            background: `url('https://dfinitybucket.s3.us-east-2.amazonaws.com/brooke-cagle-kvKSL7B6eTo-unsplash.jpg')`,
          }}
        >
          <h1 style={{ color: "white" }}>
            Mizuxe Receives $25million Transformational <br></br> Grant from
            Netflix{" "}
          </h1>
          <button
            type="button"
            style={{ marginRight: "10px" }}
            class="btn btn-outline-light btn-round-lg btn-lg"
          >
            Learn More
          </button>
        </section>

        {/* Home section ends here */}

        {/* Grid section starts here */}
        <section class="" style={{ paddingTop: "30px", textAlign: "center" }}>
          <h5 style={{ color: "#256a3f" }}>
            Total dollars invested in over 134,000 women entrepreneurs{" "}
          </h5>
          <h1 style={{ fontSize: "50px", color: "#256a3f" }}>$1,828,999,665</h1>

          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div class="container mt-2">
              <div class="row">
                <div class="col-md-3 col-sm-6">
                  <div class="card card-block">
                    <img
                      src="https://dfinitybucket.s3.us-east-2.amazonaws.com/1.jpg"
                      alt="Photo of sunset"
                    />
                    <h5
                      class="card-title mt-3 mb-3"
                      style={{ color: "#256a3f" }}
                    >
                      Meet• Sarah
                    </h5>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card card-block">
                    <img
                      src="https://dfinitybucket.s3.us-east-2.amazonaws.com/2.jpg"
                      alt="Photo of sunset"
                    />
                    <h5
                      class="card-title mt-3 mb-3"
                      style={{ color: "#256a3f" }}
                    >
                      Meet• Jeffeory
                    </h5>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card card-block">
                    <img
                      src="https://dfinitybucket.s3.us-east-2.amazonaws.com/3.jpg"
                      alt="Photo of sunset"
                    />
                    <h5
                      class="card-title mt-3 mb-3"
                      style={{ color: "#256a3f" }}
                    >
                      Meet• Ann
                    </h5>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card card-block">
                    <img
                      src="https://dfinitybucket.s3.us-east-2.amazonaws.com/4.jpg"
                      alt="Photo of sunset"
                    />
                    <h5
                      class="card-title mt-3 mb-3"
                      style={{ color: "#256a3f" }}
                    >
                      Meet• Linda
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid section ends here */}

        {/* Donate info starts here */}

        <div class="row about-container">
          <div
            class="col-lg-6 content order-lg-1 order-2"
            style={{
              background: `url('https://dfinitybucket.s3.us-east-2.amazonaws.com/mizuxeanalytics.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "70vh",
            }}
          ></div>

          <div
            class="col-lg-6 background order-lg-2"
            style={{ backgroundColor: "#F5F7FA" }}
            data-aos="zoom-in"
          >
            <div class="row justify-content-center">
              <div
                class="card"
                style={{
                  width: "25rem",
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
              >
                <div class="card-body">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                        <p style={{ fontWeight: "bold" }}>Total Donations</p>
                        <p>$100</p>
                      </div>
                      <div
                        class="col-sm"
                        style={{ backgroundColor: "#F5F7FA" }}
                      >
                        <p style={{ fontWeight: "bold" }}>Utilized fund</p>
                        <p>$71</p>
                      </div>
                      <div class="col-sm">
                        <p style={{ fontWeight: "bold" }}>My Donations</p>
                        <p>$0</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm"></div>
                      <div class="col-sm">
                        <p style={{ fontWeight: "bold" }}>Total loans</p>
                        <p>$71</p>
                      </div>
                      <div class="col-sm">
                        <p style={{ fontWeight: "bold" }}>Total No of user</p>
                        <p>2</p>
                      </div>
                    </div>

                    <div class="row">
                      <ul class="list-group" style={{ width: "25rem" }}>
                        <li class="list-group-item">
                          <p>
                            <span>
                              <img src="https://img.icons8.com/windows/15/000000/user-injured.png" />
                            </span>{" "}
                            Miko Aro
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              marginTop: "-20px",
                              marginLeft: "25px",
                            }}
                          >
                            $70{" "}
                          </p>
                        </li>
                        <li class="list-group-item">
                          <p>
                            <span>
                              <img src="https://img.icons8.com/windows/15/000000/user-injured.png" />
                            </span>{" "}
                            Anonymous
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              marginTop: "-20px",
                              marginLeft: "25px",
                            }}
                          >
                            $30{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DOnate info ends here */}

        {/* Profiling starts here */}
        <br />
        <form id="contact ">
          <div class="container-fluid" id="opening">
            <div class="row d-flex justify-content-center">
              <div class="col-sm">
                {/* FORM SECTIOM STARTS */}
                <div style={{ padding: "24px" }}>
                  <h4>Your Information</h4>
                  <hr />

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Name
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="firstname"
                        placeholder="First"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="Last"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Mailing 1
                    </label>
                    <input type="text" class="form-control" id="mailing1" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Mailing 2
                    </label>
                    <input type="text" class="form-control" id="mailing2" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Zipcode
                    </label>
                    <input type="text" class="form-control" id="zipcode" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      City & State
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder=""
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <input
                        type="text"
                        class="form-control"
                        id="state"
                        placeholder=""
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Email Address
                    </label>
                    <input type="text" class="form-control" id="email" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Phone Number
                    </label>
                    <input type="text" class="form-control" id="phone" />
                  </div>
                </div>
                {/* FORM SECTION ENDS HERE */}
              </div>
              <div class="col-sm">
                <div class="row justify-content-center">
                  <div class=" " style={{ paddingTop: "60px" }}>
                    <div class="p-1">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-user-o">
                          <img
                            width="50"
                            height="50"
                            class="img d-flex align-items-center justify-content-center"
                            src="https://dfinitybucket.s3.us-east-2.amazonaws.com/newlogo.png"
                          />
                        </span>
                      </div>

                      <p
                        style={{
                          fontWeight: "bold",
                          color: "grey",
                          textAlign: "center",
                        }}
                      >
                        MAKE A DONATION
                      </p>
                      <h6 style={{ fontWeight: "bold", textAlign: "center" }}>
                        Mizuxe
                      </h6>

                      <div>
                        <div
                          class="d-flex"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            class="btn btn-lg btn-outline-primary mr-2"
                            onClick={this.onClick10k}
                          >
                            $10000
                          </button>
                          <button
                            type="button"
                            class="btn btn-lg btn-outline-danger mr-2"
                            onClick={this.onClick5k}
                          >
                            $5000
                          </button>
                          <button
                            type="button"
                            class="btn btn-lg btn-outline-dark mr-2"
                            onClick={this.onClick25}
                          >
                            $2500
                          </button>
                          <button
                            type="button"
                            class="btn btn-lg btn-outline-primary"
                            onClick={this.onClick1k}
                          >
                            $1000
                          </button>
                        </div>

                        <div class="mb-3 input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                          </div>
                          <input
                            type="number"
                            id="amount"
                            value={this.state.value}
                            class="form-control form-control-lg  pr-5"
                            aria-label="Amount (to the nearest dollar)"
                          />
                        </div>
                        <a
                          href="#open-modal"
                          class="form-control btn btn-primary rounded submit px-3"
                          onClick={() => this.updateProfile()}
                          style={{ color: "white" }}
                        >
                          Donate Now
                        </a>

                        <div id="open-modal" class="modal-window">
                          <div>
                            <a
                              href="#modal-close"
                              title="Close"
                              class="modal-close"
                            >
                              close &times;
                            </a>
                            <h1>Successful</h1>
                            <div>Thank you for your Donation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Profiling ends here */}

        <div class="copyright" style={{ backgroundColor: "#F5F7FA" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <span>Copyright © 2021, All Right Mizuxe</span>
              </div>

              <div class="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

document.title = "DFINITY HOME";

render(<Home />, document.getElementById("app"));
