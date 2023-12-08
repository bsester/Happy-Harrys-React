import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container"><a className="navbar-brand" href="#"><img src="logo.PNG" alt="My Logo" height="50"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="home.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="customers.html">Customers</a></li>
              <li className="nav-item"><a className="nav-link" href="products.html">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="sales.html">Sales</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
  );
}

export default App;
