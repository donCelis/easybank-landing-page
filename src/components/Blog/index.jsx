import "./blog.css";
//images
import photo1 from "../../images/image-currency.jpg";
import photo2 from "../../images/image-restaurant.jpg";
import photo3 from "../../images/image-plane.jpg";
import photo4 from "../../images/image-confetti.jpg";

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2 className="mb-5">Latest Articles</h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
            <article className="card">
              <img className="card-img-top" src={photo1} alt="" />
              <div className="card-body">
                <small>By Claire Robinson</small>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
            <article className="card">
              <img className="card-img-top" src={photo2} alt="" />
              <div className="card-body">
                <small>By Claire Robinson</small>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
            <article className="card">
              <img className="card-img-top" src={photo3} alt="" />
              <div className="card-body">
                <small>By Claire Robinson</small>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
            <article className="card">
              <img className="card-img-top" src={photo4} alt="" />
              <div className="card-body">
                <small>By Claire Robinson</small>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
