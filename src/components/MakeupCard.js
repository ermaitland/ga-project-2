import { Link } from 'react-router-dom';

const MakeupCard = ({ name, image, brand, tag, prodLink }) => {
  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <Link to={`/makeups/${brand}`}>
          <div className="card has-background-grey">
            <div className="card-header">
              <h1 className="title is-4 has-text-centered has-text-white has-font-sans-serif has-text-weight-normal">
                {name}
              </h1>
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
                <div className="media-content ">
                  <p className="subtitle is-6 has-text-light is-capitalized">
                    {brand}
                  </p>{' '}
                  <p className="subtitle is-7 has-text-light">
                    This product is: {tag[0]}, Lovely
                  </p>
                  <p className="subtitle is-6 has-text-light ">
                    Product Link: {prodLink}
                  </p>
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
