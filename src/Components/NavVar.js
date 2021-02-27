function NavVar() {
    return (
    <div className='NavVhar'>
            
            <header id="header" className="fixed-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo"><a href="index.html">Raihan</a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav className="nav-menu d-none d-lg-block">
            <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>{/* .nav-menu */}
        <div className="header-social-links">
            <a href="#" className="twitter"><i className="icofont-twitter" /></a>
            <a href="#" className="facebook"><i className="icofont-facebook" /></a>
            <a href="#" className="instagram"><i className="icofont-instagram" /></a>
            <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
        </div>
        </div>
        </header>

    </div>
    )};

export default NavVar;