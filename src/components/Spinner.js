import { RiseLoader } from 'react-spinners';

function Spinner() {
  return (
    <section className="hero is-fullheight-with-navbar has-background-link-light">
      <div className="hero-body">
        <div className="container">
          <RiseLoader color="#00FFFF" size="45px" margin="100px" />
        </div>
      </div>
    </section>
  );
}

export default Spinner;
