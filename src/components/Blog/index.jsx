import "./blog.css";
//images
import photo1 from "../../images/image-currency.jpg";
import photo2 from "../../images/image-restaurant.jpg";
import photo3 from "../../images/image-plane.jpg";
import photo4 from "../../images/image-confetti.jpg";

let data = [
  {
    img: photo1,
    caption: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    text:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    img: photo2,
    caption: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    img: photo3,
    caption: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    text:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    img: photo4,
    caption: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

function Card({ data }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
      <article className="card">
        <img className="card-img-top" src={data.img} alt={data.title} />
        <div className="card-body">
          <small>{data.caption}</small>
          <h5>{data.title}</h5>
          <p>{data.text}</p>
        </div>
      </article>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2 className="mb-5">Latest Articles</h2>
        <div className="row">
          {data.map((element, id) => (
            <Card key={id} data={element} />
          ))}
          {/* <Card {...element} id={key} /> */}
        </div>
      </div>
    </section>
  );
}
