import './header.css'
import { Routes, Route,Link } from "react-router-dom";
import About from './About'
const Header=()=>{
   const simpleStyle = {
    Color:"white",
    backgroundColor:"blue",
    margin:"8px",
    fontFamily:"Open Sans"
   }
    return(
        <div>  
    <nav className="navbar">
  <div className="container-fluid">
    <h2 className="navbar-brand" >The Broken Hearts Gallery</h2>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Register</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Register</h5>
    
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
  </div>
  <div class="offcanvas-body">
<input></input>
  </div>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <Link as={Link} to="/about" className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
       <div className='unicorn'>
        <div className='corn'>   
        <div> 
        <h1>BOOKS</h1>
        <h2 >Gallery Books is known for publishing a wide range of books that engage, enlighten, and entertain. Our list features nonfiction titles from an impressive roster of bestselling authors, highly sought after personalities, tastemakers and influencers, and established thought leaders that deliver the best in memoir, biography, pop culture, humor, self-improvement, and cultural commentary. Our formidable fiction list is made up of some of the industry’s biggest, genre-defining franchises, page-turning thrillers, and deeply heartfelt novels. Together, our targeted publishing program delivers a curated collection of books that truly resonate with readers. </h2></div></div>
       </div>
       <div>
       <Routes>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </div>
         </div>
         )
}


export default Header;