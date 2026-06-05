function Universe() {
  return (
    <div className="container p-5">
      <h1 className="text-center mb-4">The FinoSphere Universe</h1>
      <p className="text-center">
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>
      <div className="row">
        {[
          {
            img: "/assets/images/zerodhaFundhouse.png",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
          },
          {
            img: "/assets/images/sensibullLogo.svg",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
          },
          {
            img: "/assets/images/tijori.svg",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
          },
          {
            img: "/assets/images/streakLogo.png",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
          },
          {
            img: "/assets/images/smallcaseLogo.png",
            text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
          },
          {
            img: "/assets/images/dittoLogo.png",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 p-3 p-md-5 text-center text-muted"
          >
            <img
              src={item.img}
              style={{ width: "50%" }}
              alt=""
              className="mb-3 d-block mx-auto"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Responsive Button Centered */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary"
          style={{
            width: "75%", // Default width
            maxWidth: "250px", // Ensures it doesn't get too large
            margin: "0 auto",
            display: "block",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
