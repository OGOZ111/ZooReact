import "./CardH.css";

const CardH = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src={`https://source.unsplash.com/400x400/?${props.name}`}
          alt="unsplash random image"
        />
        <div>
          <h2>{props.name}</h2>

          <div className="info">
            <button className="control__btn" onClick={props.clickminus}>
              -
            </button>
            <p className="likes">{props.likes} </p>
            <span className="material-icons">
              {props.likes >= 0 ? "favourite" : "heart_broken"}
            </span>

            <button className="control__btn" onClick={props.clickplus}>
              +
            </button>
            <button onClick={props.click} className="close">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardH;
