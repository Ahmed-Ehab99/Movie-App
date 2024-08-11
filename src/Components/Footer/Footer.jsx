import FooterNavItem from "../FooterNavItem/FooterNavItem";
import "./Footer.css";

export default function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of Servie",
    "Privacy Policy",
  ];
  const locations = [
    "Dolorem Optio",
    "Non rem rerum",
    "Cras fermentun odio",
    "justo eget",
    "fermentun iaculis",
  ];
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-info">
                <a href="" className="logo d-flex align-items-center">
                  <span className="text-uppercase">cinema</span>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  laborum pariatur voluptatibus quo quia excepturi quae et!
                  Totam a fugit odio deserunt nemo, natus eum accusamus,
                  delectus earum dolor doloremque.
                </p>
                <div className="social-links mt-3">
                  <a href="" className="twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="" className="facebook">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="" className="instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="" className="youtube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-2  col-md-6 col-sm-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {usefulLinks.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 footer-links">
                <h4>Our Cinemas</h4>
                <ul>
                  {locations.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Street Name <br />
                  City Name, State 123456
                  <br />
                  Australia <br />
                  <br />
                  <strong>Phone:</strong> +1 2345 6789 00
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>DStudio Technology</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">DStudio Technology</a>
          </div>
        </div>
      </footer>
    </>
  );
}
