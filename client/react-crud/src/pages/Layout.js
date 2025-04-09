import { Outlet, Link } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-cyan/theme.css";




const Layout = () => {
  return (
    <>
{/*       { <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
          </li>
          
        </ul>
      </nav>
       } */}

     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blog</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
              </li>


              <li className="nav-item">
              <Link className="nav-link" to="/shopping">Shopping</Link>
              </li>


              <li className="nav-item">
              <Link className="nav-link" to="/greeting">Greeting</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/tutorials">Tutorials</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/addTutorials">Add Tutorials</Link>
              </li>



            </ul>

          </div>
        </div>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Layout;