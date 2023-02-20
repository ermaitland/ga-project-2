import { RiseLoader } from 'react-spinners';

function Spinner() {
  return (
    <section className="hero is-fullheight-with-navbar LoadingPage Spinner">
      <div className="hero-body">
        <div className="container">
          <RiseLoader color="#DE3163" size="45px" margin="100px" />
        </div>
      </div>
    </section>
  );
}

export default Spinner;
