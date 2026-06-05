function RightSection({ heading, info, learnMore, imgUrl }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Content Section */}
        <div className="col-12 col-md-6 text-center p-5 text-md-start">
          <h1 className="p-3">{heading}</h1>
          <p className="p-3">{info}</p>

          {/* Buttons Section */}
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start p-3">
            <a href="#" className="text-decoration-none">
              {learnMore}&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imgUrl} alt="imgUrl" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
