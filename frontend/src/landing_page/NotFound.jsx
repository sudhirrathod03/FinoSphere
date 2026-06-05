import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="text-center p-5">
      <h1 style={{ color: "red" }}>404 Not found</h1>
      <p>Sorry, the page you are looking for does not exist</p>
    </div>
  );
}

export default NotFound;
