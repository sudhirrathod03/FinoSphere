function LeftSection({
  imgUrl,
  heading,
  info,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 p-5">
          <img src={imgUrl} alt="imgUrl" className="img-fluid" />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="p-3">{heading}</h1>
          <p className="p-3">{info}</p>

          {/* Buttons Section */}
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start p-3">
            <a href="#" className="mb-3 mb-sm-0 me-sm-3 text-decoration-none">
              {tryDemo}&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none">
              {learnMore}&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Store Logos */}
          <div className="store-logo p-3 d-flex justify-content-center justify-content-md-start">
            <img
              src={playStore}
              alt="playstore"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
            <img
              src={appStore}
              alt="app-store"
              className="mx-3 img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
