import { Link } from "react-router";

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img className="w-full"
      src={news.thumbnail_url}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{news.title}</h2>
    <p className="font-sans">{news.details}</p>
    <div className="card-actions">
      <Link to="/" className="btn btn-primary">All news in this category</Link>
    </div>
  </div>
</div>
    );
};

export default NewsDetailsCard;