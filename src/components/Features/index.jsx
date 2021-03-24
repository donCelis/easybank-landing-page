import "./features.css";
//images
import icon1 from "../../images/icon-online.svg";
import icon2 from "../../images/icon-budgeting.svg";
import icon3 from "../../images/icon-onboarding.svg";
import icon4 from "../../images/icon-api.svg";

let data = [
  {
    img: icon1,
    title: "Online Banking",
    text:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: icon2,
    title: "Simple Budgeting",
    text:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    img: icon3,
    title: "Fast Onboarding",
    text:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    img: icon4,
    title: "Open API",
    text:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

function ElementTemplate({ data }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <article>
        <img src={data.img} alt={data.title} />
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </article>
    </div>
  );
}

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
          {data.map((element, id) => (
            <ElementTemplate key={id} data={element} />
          ))}
        </div>
      </div>
    </section>
  );
}
