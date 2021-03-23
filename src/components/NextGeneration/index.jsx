import "./nextGeneration.css";
import imageMockups from "../../images/image-mockups.png";

export default function NextGeneration() {
  return (
    <section className="nextG">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-lg-6">
            <article>
              <h2>Next generation digital banking</h2>
              <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <a href="#" className="btn-main">
                Request Invite
              </a>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-lg-6 p-initial">
            <article>
              <img className="img-fluid" src={imageMockups} alt="Next generation digital banking" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
