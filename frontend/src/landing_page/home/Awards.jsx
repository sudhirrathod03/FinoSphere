// function Awards() {
//   return (
//     <div className="container mb-5 p-5">
//       <div className="row">
//         <div className="col-12 col-md-6">
//           <img src="/assets/images/largestBroker.svg" alt="largest broker" />
//         </div>
//         <div className="col-6 p-3 mt-3">
//           <h1 className="mb-4">Largest stock broker in india</h1>
//           <p className="mb-5">
//             2+ million Zerodha clients contribute to over 15% of all retail
//             order volumes in india daily by trading and investing in:
//           </p>
//           <div className="row">
//             <div className="col-12 col-md-6">
//               <ul>
//                 <p>
//                   <li>future and options</li>
//                 </p>
//                 <p>
//                   {" "}
//                   <li>commodity derivatives</li>
//                 </p>
//                 <li>currency derivatives</li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <p>
//                 <li>Stock and IPOs</li>
//               </p>
//               <p>
//                 <li>Direct mutual funds</li>
//               </p>
//               <li>Bonds and gov. securities</li>
//             </div>
//           </div>
//           <img src="/assets/images/pressLogos.png" style={{ width: "90%" }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;
function Awards() {
  return (
    <div className="container mb-5 p-3 p-md-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
          <img 
            src="/assets/images/largestBroker.svg" 
            alt="largest broker" 
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6 p-3">
          <h1 className="mb-3 mb-md-4 text-center text-lg-start">
            Largest stock broker in India
          </h1>
          <p className="mb-4 mb-md-5 text-center text-lg-start">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Trading Options Grid */}
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Future and options
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Commodity derivatives
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Currency derivatives
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Stocks and IPOs
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Direct mutual funds
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Bonds and govt. securities
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="text-center text-lg-start">
            <img 
              src="/assets/images/pressLogos.png" 
              alt="Press logos"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;