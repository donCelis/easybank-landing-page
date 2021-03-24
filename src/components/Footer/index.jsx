import "./footer.css";
import logo from "../../images/logo.svg";
import iconFb from "../../images/icon-facebook.svg";
import iconYt from "../../images/icon-youtube.svg";
import iconTw from "../../images/icon-twitter.svg";
import iconPin from "../../images/icon-pinterest.svg";
import iconInsta from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-6">
                <section>
                  <a href="#" className="d-inline-block">
                    <img className="img-fluid logo" src={logo} alt="EasyBank" />
                  </a>
                  <div className="mt-5 icons-social">
                    <a href="#">
                      <img className="img-fluid" src={iconFb} alt="" />
                    </a>
                    <a href="#">
                      <img className="img-fluid" src={iconYt} alt="" />
                    </a>
                    <a href="#">
                      <img className="img-fluid" src={iconTw} alt="" />
                    </a>
                    <a href="#">
                      <img className="img-fluid" src={iconPin} alt="" />
                    </a>
                    <a href="#">
                      <img className="img-fluid" src={iconInsta} alt="" />
                    </a>
                  </div>
                </section>
              </div>
              <div className="col-3">
                <section className="links">
                  <a className="d-block" href="#">
                    About Us
                  </a>
                  <a className="d-block" href="">
                    Contact
                  </a>
                  <a className="d-block" href="">
                    Blog
                  </a>
                </section>
              </div>
              <div className="col-3">
                <section className="links">
                  <a className="d-block" href="#">
                    Careers
                  </a>
                  <a className="d-block" href="">
                    Support
                  </a>
                  <a className="d-block" href="">
                    Privacy Policy
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="col-6">
            <article className="text-right">
              <a href="" className="btn-main">
                Request Invite
              </a>
              <p className="m-0 mt-5">© Easybank. All Rights Reserved</p>
            </article>
          </div>
        </div>
      </div>
    </footer>
  );
}
