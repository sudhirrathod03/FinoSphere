function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        {/* Text Section */}
        <div className="col-md-5 col-12 p-5">
          <h1 className="mb-5">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-md-7 col-12 d-flex flex-wrap justify-content-center mt-5">
          <div className="d-flex flex-column align-items-center text-center mx-3">
            <img
              src="/assets/images/pricingEquity.svg"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt="Equity Pricing"
            />
            <span style={{ fontSize: "0.8rem", marginTop: "10px" }}>
              Free account <br /> opening
            </span>
          </div>

          <div className="d-flex flex-column align-items-center text-center mx-3">
            <img
              src="/assets/images/pricingMF.svg"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt="MF Pricing"
            />
            <span style={{ fontSize: "0.8rem", marginTop: "10px" }}>
              Free equity delivery <br />
              and direct mutual funds
            </span>
          </div>

          <div className="d-flex flex-column align-items-center text-center mx-3">
            <img
              src="https://zerodha.com/static/images/other-trades.svg"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt="Other Trades"
            />
            <span style={{ fontSize: "0.8rem", marginTop: "10px" }}>
              Intraday and <br /> F&O
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
