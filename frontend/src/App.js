import React from "react";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
        {
          data.products.map(product => (

          ))
        }
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.hrml">
                <h2>Chanel perfume N05</h2>
              </a>
              <div className="rating">
                <span>
                  {" "}
                  <i className="fa fa-star"></i>{" "}
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  {" "}
                  <i className="fa fa-star"></i>{" "}
                </span>
                <span>
                  {" "}
                  <i className="fa fa-star"></i>{" "}
                </span>
                <span>
                  {" "}
                  <i className="fa fa-star"></i>{" "}
                </span>
              </div>
              <div className="price"> $120 </div>
            </div>
          </div>
        
          
        </div>
      </main>
      <footer className="row center">All right reserved </footer>
    </div>
  );
}

export default App;
