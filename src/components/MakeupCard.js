const MakeupCard = ({ name, image, brand, tag, prodLink, description }) => {
  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <div className="card has-background-grey">
          <div className="card-header">
            <h1 className="title is-4 pt-2 has-text-centered has-text-white has-font-sans-serif has-text-weight-normal">
              {name}
            </h1>
          </div>
          <div className="card-image pt-3">
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
                  This product is: Lovely &.... {tag[0]}
                </p>
                <p className="subtitle is-6 has-text-light ">
                  Product Link: {prodLink}
                </p>
              </div>
            </div>
            <br />
          </div>
          <div className="dropdown is-hoverable pb-2 ml-2">
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu4"
              >
                <span>Description</span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeupCard;
