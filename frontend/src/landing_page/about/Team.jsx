import "./team.css";

function Team() {
  return (
    <div className="container p-5">
      <h2 className="text-center mx-5 mb-5">People</h2>
      <div className="row d-flex flex-column flex-md-row align-items-start justify-content-center">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
          <img
            src="assets/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="ceo-img rounded-circle img-fluid"
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>

        <div className="col-12 col-md-6 ceo-des mt-4 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
