export default function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container p-4 mt-2">
    <a className="navbar-brand" href="#">Atomic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav lead_link">
        <li className="nav-item">
          <a className="nav-link active me-2" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-2" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-2" href="#">PORTFOLIO
          <span><button className="d-btn"><i className="fa-solid fa-angle-down"></i></button></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-2" href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-2" href="#">BLOG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-1" href="#">TESTIMONIALS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}