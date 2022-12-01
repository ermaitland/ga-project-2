import { Link } from 'react-router-dom';

const MakeupCard = ({ name, image, brand, category, id }) => {
  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
        <Link to={`/makeups/${id}`}>
          <div className="card">
            <div className="card-header">
              <h1 className="title is-4">{name}</h1>
            </div>
            <div className="card-image">
              <figure className="image is-1by1">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  width="255"
                  height="255"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="subtitle is-6">{brand}</p>
                  <p className="subtitle is-7">Category: {category}</p>
                </div>
              </div>
              <br />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MakeupCard;
