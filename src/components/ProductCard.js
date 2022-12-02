const ProductCard = ({ name, image, brand, tag, prodLink, description }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-one-mobile">
      <div className="card has-background-grey-darker">
        <div className="card-header Card-Header">
          <h1 className="title is-4 pt-2 pl-1 has-text-centered has-text-grey-light has-font-sans-serif has-text-weight-normal">
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
              <p className="subtitle is-7 has-text-grey-light">
                This product is: Lovely &... {tag[0]}
              </p>
              <a href={prodLink} target="blank">
                Click here to go to the prduct!
              </a>
            </div>
          </div>
          <br />
        </div>
        <div className="dropdown is-hoverable is-up pb-2 ml-2">
          <div className="dropdown-trigger">
            <button
              className="button has-background-danger-light"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span>Description</span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content Description">
              <div className="dropdown-item">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
