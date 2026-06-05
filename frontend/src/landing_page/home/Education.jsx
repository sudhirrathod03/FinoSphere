function Education() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="/assets/images/education.svg"
            style={{
              maxWidth: "100%", // Prevents overflow
              height: "auto", // Maintains aspect ratio
              maxHeight: "90%", // Keeps height under control
            }}
            alt="Education"
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h2 className="mb-5">Free and open market education</h2>
          <div className="mb-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              Varsity&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market-related queries.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQ&A&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
