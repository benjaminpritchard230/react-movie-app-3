import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ setSearchText }) => {
  const navigate = useNavigate();

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    setInput(e.target.value);
    navigate("/");
  };

  const handleHomeClick = () => {
    setSearchText("");
    navigate("/");
    setInput("");
  };

  const [input, setInput] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 align-self-center">
          <div className="d-flex align-items-center ">
            <Link to={"/"}>
              <button
                onClick={() => {
                  handleHomeClick();
                }}
              >
                Movie App
              </button>
            </Link>
          </div>
        </div>
        <div className="col-6 align-self-center">
          <div className="d-flex justify-content-end">
            <input
              value={input}
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
