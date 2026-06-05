function Hero({ setShowForm, setFormType }) {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/assets/images/homeHero.png"
          alt="hero image"
          className="mb-5"
        />
        <h1 className="mb-3">Invest in everything</h1>
        <p className="mb-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        {!isLoggedIn && (
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-primary btn-lg w-75 w-sm-50 w-md-25"
              style={{ maxWidth: "300px" }}
              onClick={() => {
                setFormType("signup");
                setShowForm(true);
              }}
            >
              Sign up for free
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
