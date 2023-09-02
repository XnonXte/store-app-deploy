const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Store App</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          repellat, cum voluptas nobis deleniti totam libero, consectetur
          nesciunt a rem sunt vitae hic? Repellendus, illum.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Buy
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
