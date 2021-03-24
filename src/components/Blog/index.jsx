import "./blog.css";
//images
import photo1 from "../../images/image-currency.jpg";
import photo2 from "../../images/image-restaurant.jpg";
import photo3 from "../../images/image-plane.jpg";
import photo4 from "../../images/image-confetti.jpg";

let data = [
  {
    img: photo1,
    caption: "",
    title: "Hola Mundo",
    text: "",
  },
  {
    img: photo2,
    caption: "",
    title: "",
    text: "",
  },
  {
    img: photo3,
    caption: "",
    title: "",
    text: "",
  },
  {
    img: photo4,
    caption: "",
    title: "",
    text: "",
  },
];

function Card({ data }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
      <article className="card">
        <img className="card-img-top" src={data.img} alt="" />
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
          {data.map((element, key) => (
            <Card data={element} id={key} />
          ))}
          {/* <Card {...element} id={key} /> */}
        </div>
      </div>
    </section>
  );
}
