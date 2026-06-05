function Hero() {
  return (
    <div className="container p-5 mt-5">
      {/* Heading */}
      <div className="col mb-5 text-center text-muted">
        <h1 className="mb-3">Charges</h1>
        <p>List of all charges and taxes</p>
      </div>

      {/* Responsive Grid */}
      <div className="row mt-5 text-center">
        <div className="col-md-4 col-sm-12 p-3">
          <img
            src="/assets/images/pricing0.svg"
            className="img-fluid"
            style={{ width: "150px" }}
            alt=""
          />
          <h2 className="mb-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-md-4 col-sm-12 p-3">
          <img
            src="/assets/images/other-trades.svg"
            className="img-fluid"
            style={{ width: "150px" }}
            alt=""
          />
          <h2 className="mb-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-md-4 col-sm-12 p-3">
          <img
            src="/assets/images/pricing0.svg"
            className="img-fluid"
            style={{ width: "150px" }}
            alt=""
          />
          <h2 className="mb-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
