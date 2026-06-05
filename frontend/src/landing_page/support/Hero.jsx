function Hero({ setShowForm, setFormType }) {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/assets/images/homeHero.png"
          alt="hero image"
          className="mb-5"
        />
        <h1 className="mb-5">Invest in everything</h1>
        <p className="mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => {
            setFormType("signup");
            setShowForm(true);
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
