const Searchpage = ({ searchText }) => {
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-12">
          <h3>Showing results for "{searchText}":</h3>
        </div>
      </div>
      <div className="row ">
        <div className="col-6">
          <div className="card">
            <div>
              <h4>Harry Potter and the Philosopher's Stone</h4>
              <p>2001</p>
              <p>Director: Chris Columbus</p>
            </div>

            <img
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div>
              <h4>Harry Potter and the Philosopher's Stone</h4>
              <p>2001</p>
              <p>Director: Chris Columbus</p>
            </div>

            <img
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div>
              <h4>Harry Potter and the Philosopher's Stone</h4>
              <p>2001</p>
              <p>Director: Chris Columbus</p>
            </div>

            <img
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div>
              <h4>Harry Potter and the Philosopher's Stone</h4>
              <p>2001</p>
              <p>Director: Chris Columbus</p>
            </div>

            <img
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
