import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ setSearchText }) => {
  const navigate = useNavigate();

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 align-self-center">
          <div className="d-flex align-items-center ">
            <h2>Movie App</h2>
          </div>
        </div>
        <div className="col-6 align-self-center">
          <div className="d-flex justify-content-end">
            <input
              type="text"
              placeholder="Movie title"
              onChange={updateSearchText}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
