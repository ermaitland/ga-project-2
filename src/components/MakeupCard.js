import { Link } from 'react-router-dom';

const MakeupCard = ({ name, image, description, brand, productLink, id }) => {
  return (
    <>
      <div className="card is-one-quarter-desktop is-one-third-tablet is-half-mobile">
        <Link to={`/makeups/${id}`}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image} alt={name} loading="lazy" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{brand}</p>
                <p className="subtitle is-7">{productLink}</p>
              </div>
            </div>
            <br />
            <div className="content">{description}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MakeupCard;
