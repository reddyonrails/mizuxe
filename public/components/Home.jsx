// import contact from 'ic:canisters/contacts';
import * as React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div class="new-entry">
        
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img width='50' height='50' src='https://dfinitybucket.s3.us-east-2.amazonaws.com/newlogo.png' /> <h3 class="d-inline align-middle">Mizuxe</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Getting Started
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            App Search
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Communities
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Users
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Donate
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Our Mission</a></li>
            <li><a class="dropdown-item" href="#">Success Stories</a></li>
            <li><a class="dropdown-item" href="#">Our Review System</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <form class="d-flex">
      <button type="button" style={{marginRight:'10px'}} class="btn btn-outline-primary btn-round-lg btn-lg">Donate</button>
      {/* <button class="btn btn-outline-success btn-round-lg btn-lg" type="submit">Search</button> */}
    </form>
  
</nav>
<section style={{textAlign:'center',height:'80vh',padding:'130px 0px',width:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat',background:`url('https://dfinitybucket.s3.us-east-2.amazonaws.com/brooke-cagle-kvKSL7B6eTo-unsplash.jpg')`}}>
<h1 style={{color:'white'}}>Mizuxe Receives $25million Transformational <br></br> Grant from Netflix </h1>
<button type="button" style={{marginRight:'10px'}} class="btn btn-outline-light btn-round-lg btn-lg">Learn More</button>

</section>


  

      </div>
    );
  }
}

export default Home;