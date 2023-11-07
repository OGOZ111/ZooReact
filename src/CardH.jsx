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
            <button>-</button>
            <span className="mat">{props.likes}</span>
            <button>+</button>
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
