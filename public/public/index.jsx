import bridgingappx from 'ic:canisters/bridgingappx';
import * as React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

console.log(bridgingappx)


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0
    };
  }

  async componentDidMount() {
    retrieveProfile();

/*     const userId = await bridgingappx.getOwnId();

    console.log("user id is: " + userId);
  
    let result = {};
      if (userId) {
         result = await bridgingappx.get(userId);
         console.log(result);
      } */
  
    // etc
    //document.getElementById(
      
  }

  async retrieveProfile() {
    const userId = await bridgingappx.getOwnId();

    console.log("user id is: " + userId);
  
    let result = {};
      if (userId) {
         result = await bridgingappx.get(userId);
         console.log(result);
      }
  }

  componentDidMount(){
    const result = makeResquest()
 }
 async makeRequest(){
    const res = await fetch(url);
    const data = await res.json();
    return data
 }

  submit=(e)=>{
    e.preventDefault()
    let firstname=document.getElementById('firstname').value
    let amount=document.getElementById('amount').value
    alert(firstname+' '+amount)
  }

  doInsert=(e)=> {
    e.preventDefault();
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let mailing1=document.getElementById('mailing1').value
    let mailing2=document.getElementById('mailing2').value
    let zipcode=document.getElementById("zipcode").value
    let city=document.getElementById('city').value
    let state=document.getElementById('state').value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let amount=document.getElementById('amount').value
    

    bridgingappx.create(firstname, lastname, mailing1, mailing2,zipcode,city,state,email,phone,amount).then(s=>{
      console.log('success',s)
    }).catch(err=>{
      console.log(err)
    })
  }
  async lookup() {
    let name = document.getElementById("lookupName").value;
    bridgingappx.lookup(name).then(opt_entry => {
      let entry;

      if (opt_entry.length == 0) {
        entry = { name: "", description: "", phone: ""};
      } else {
        entry = opt_entry[0]
      }

      document.getElementById("newEntryName").value = entry.name;
      document.getElementById("newEntryAddress1").value = entry.address1;
      document.getElementById("newEntryAddress2").value = entry.address2;
      document.getElementById("newEntryEmail").value = entry.email;
      document.getElementById("newEntryPhone").value = entry.phone.toString();
    });
  }

  onClick10k=()=>{
    this.setState({
      value:10000
    })
  }
  onClick5k=()=>{
    this.setState({
      value:5000
    })
  }
  onClick25=()=>{
    this.setState({
      value:2500
    })
  }
  onClick1k=()=>{
    this.setState({
      value:1000
    })
  }

  render() {
    return (
      <div>
        {/* Home section starts here */}

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

{/* Home section ends here */}


{/* Donate info starts here */}

<div class="container" style={{padding:'24px'}}>
            <div class="row">
              <div class="col-sm" style={{background:`url('https://dfinitybucket.s3.us-east-2.amazonaws.com/mizuxeanalytics.jpg')`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'70vh'}}>
                
              </div>
              <div class="col-sm ">
                  fjfjfgj
              </div>
            </div>
</div>

{/* DOnate info ends here */}

{/* Profiling starts here */}
<br/>
          <form action="">
          <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-sm">
                    {/* FORM SECTIOM STARTS */}
                    <div  style={{padding:'24px'}} >
                        <h4>Your Information</h4>
                        <hr/>
                                    
                                 
  <div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Name</label>
  <div class="input-group mb-3">
  <input type="text" class="form-control" id="firstname" placeholder="First" aria-label="Username" aria-describedby="basic-addon1"/>
  <input type="text" class="form-control" id="lastname" placeholder="Last" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mailing 1</label>
    <input type="text" class="form-control" id="mailing1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mailing 2</label>
    <input type="text" class="form-control" id="mailing2"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Zipcode</label>
    <input type="text" class="form-control" id="zipcode"/>
  </div>
  <div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">City & State</label>
  <div class="input-group mb-3">
  <input type="text" class="form-control" id="city" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
  <input type="text" class="form-control" id="state" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email Address</label>
    <input type="text" class="form-control" id="email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="phone"/>
  </div>
 
 

                                        
                                    </div>
                    {/* FORM SECTION ENDS HERE */}
                </div>
                <div class="col-sm" >
                <div style={{width:'100%'}}>
                   
                    <img width='50' height='50' class="pl-6" style={{textAlign:'center'}} src='https://dfinitybucket.s3.us-east-2.amazonaws.com/newlogo.png' />
                      
                      <p style={{fontWeight:'bold',color:'grey',textAlign:'center'}}>MAKE A DONATION</p>
                      <h6 style={{fontWeight:'bold',textAlign:'center'}}>Mizuxe</h6>

                      <div>

                      

                      <div class="d-flex" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-lg btn-outline-primary mr-2" onClick={this.onClick10k}>$10000</button>
                        <button type="button" class="btn btn-lg btn-outline-danger mr-2" onClick={this.onClick5k}>$5000</button>
                        <button type="button" class="btn btn-lg btn-outline-dark mr-2" onClick={this.onClick25}>$2500</button>
                        <button type="button" class="btn btn-lg btn-outline-primary" onClick={this.onClick1k}>$1000</button>
                      </div>
                      
                        
                       <div class="mb-3 input-group">
                       <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                            
                          </div>
                          <input type="number" id="amount" value={this.state.value} class="form-control form-control-lg  pr-5" aria-label="Amount (to the nearest dollar)" />
                      
                      </div>
                      <button type="submit" class="btn btn-secondary" onClick={this.doInsert}>Donate Now</button>
                       </div>

                    
                    
                  </div>
                </div>
            </div>
            </div>
           
            </form>

            {/* Profiling ends here */}

        
      </div>
    );
  }
}

document.title = "DFINITY CONTACT EXAMPLE";

render(<Contact />, document.getElementById('app'));