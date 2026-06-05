function Hero() {
  return (
    <div className="container text-center p-5">
      <h1 className="mt-3 p-2">FinoSphere Products</h1>
      <h4 className="mt-3 p-2 text-muted">
        Sleek, modern, and intuitive trading platforms
      </h4>
      <p className="mt-3 p-2">
        Check out our{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings&nbsp;&nbsp;
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </p>
      <hr />
    </div>
  );
}

export default Hero;
