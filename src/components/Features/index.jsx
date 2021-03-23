import "./features.css";
//images
import icon1 from "../../images/icon-online.svg";
import icon2 from "../../images/icon-budgeting.svg";
import icon3 from "../../images/icon-onboarding.svg";
import icon4 from "../../images/icon-api.svg";

export default function Features() {
  return (
    <section className="features py-5">
      <div className="container">
        <article>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.
          </p>
        </article>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <article>
              <img src={icon1} alt="Online Banking" />
              <h4>Online Banking</h4>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <article>
              <img src={icon2} alt="Simple Budgeting" />
              <h4>Simple Budgeting</h4>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <article>
              <img src={icon3} alt="Fast Onboarding" />
              <h4>Fast Onboarding</h4>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </article>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <article>
              <img src={icon4} alt="Open API" />
              <h4>Open API</h4>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
