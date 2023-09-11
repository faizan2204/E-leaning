import React from 'react'
import logo from '../../img/logo2.png'
import Java from './InnerMain'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div className="container"><a href="#" className="navbar-brand d-flex align-items-center"> <img src={logo} alt="" />  edu<strong>Center</strong></a>
    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><a href="#" className="nav-link font-italic"> Home </a></li>
        <li className="nav-item active"><a href="#" className="nav-link font-italic"> About </a></li>
        <li className="nav-item active"><a href="#" className="nav-link font-italic"> Services </a></li>
        <li className="nav-item active"><a href="#" className="nav-link font-italic"> Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">Want to lean Java?</h1>
        <p className="lead text-muted mb-0">Learn java programing with us.</p>
        {/* <p className="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" className="text-muted"> 
                    <u>Let Start</u></a>
        </p> */}
        <br />
        <a href="/InnerMain">
        <button type="button" className="btn btn-outline-warning">Let's Go</button>
        </a>
        
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
    </div>
  </div>
</div>

<div className="bg-white py-5">
  <div className="container py-5">
  <h2 className="display-4 font-weight-light">Our Services</h2>
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">About Us</h2>
        <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

    <div className="row text-center">
      {/* <!-- Team item--> */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <!-- End--> */}

    </div>
  </div>
</div>




    </div>
  )
}

export default Header



// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../img/logo.png';

// function Header() {
//   return (
//     <Navbar variant="dark" bg="dark" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#home">
//           <a href="/">
//             <img src={logo} alt="logo" />
//           </a>
        
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-dark-example" />
//         <Navbar.Collapse id="navbar-dark-example" className='d-flex justify-content-sm-center'>
//           <Nav>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">About</Nav.Link>
//             <NavDropdown
//               id="nav-dropdown-dark-example"
//               title="Dropdown"
//               menuVariant="dark"
//             >
//               <NavDropdown.Item href="#action/3.1">
//                 Java
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Java Question
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">
//                 Java History
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

