import "./createticket.css";

function CreateTicket() {
  return (
    <div className="container p-5">
      <h4 className="text-muted p-3">
        {" "}
        To create a ticket, select a relevant topic
      </h4>
      <div className="row">
        {[
          {
            icon: "fa-solid fa-plus",
            title: "Account Opening",
            links: [
              "Resident individual",
              "Minor",
              "Non Resident Indian (NRI)",
              "Company, Partnership, HUF and LLP",
              "Glossary",
            ],
          },
          {
            icon: "fa-regular fa-user",
            title: "Your Zerodha Account",
            links: [
              "Your Profile",
              "Account modification",
              "Client Master Report (CMR)",
              "Nomination",
              "Transfer and conversion of securities",
            ],
          },
          {
            icon: "fa-solid fa-chart-simple",
            title: "Kite",
            links: [
              "IPO",
              "Trading FAQs",
              "Margin Trading Facility (MTF) and Margins",
              "Charts and orders",
              "Alerts and Nudges",
              "General",
            ],
          },
          {
            icon: "fa-solid fa-wallet",
            title: "Funds",
            links: [
              "Add money",
              "Withdraw money",
              "Add bank accounts",
              "eMandates",
            ],
          },
          {
            icon: "fa-regular fa-circle",
            title: "Console",
            links: [
              "Portfolio",
              "Corporate actions",
              "Funds statement",
              "Reports",
              "Profile",
              "Segments",
            ],
          },
          {
            icon: "fa-solid fa-coins",
            title: "Coin",
            links: [
              "Understanding mutual funds and Coin",
              "Coin app",
              "Coin web",
              "Transactions and reports",
              "National Pension Scheme (NPS)",
            ],
          },
        ].map((section, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 p-3">
            <h5 className="mb-3">
              <i className={section.icon}></i> &nbsp;&nbsp;{section.title}
            </h5>
            <div className="tags">
              {section.links.map((link, i) => (
                <div key={i} className="tag-item">
                  <a href="">{link}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
