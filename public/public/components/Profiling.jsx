// import contact from 'ic:canisters/contacts';
import * as React from 'react';


class Profiling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0
    };
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
      <div class="new-entry">
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
  <input type="text" class="form-control" placeholder="First" aria-label="Username" aria-describedby="basic-addon1"/>
  <input type="text" class="form-control" placeholder="Last" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mailing 1</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mailing 2</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Zipcode</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">City & State</label>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
  <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
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
                          <input type="text" value={this.state.value} class="form-control form-control-lg  pr-5" aria-label="Amount (to the nearest dollar)" />
                      
                      </div>
                      <button type="submit" class="btn btn-secondary">Donate Now</button>
                       </div>

                    
                    
                  </div>
                </div>
            </div>
            </div>
           
            </form>
      </div>
    );
  }
}

export default Profiling;