import "./CardH.css";

const CardH = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src="src/assets/Steve-Irwin-snake-2002.webp"
          alt="unsplash random image"
        />
        <div>
          <h2>{props.name}</h2>

          <div className="info">
            <button>-</button>
            <span className="material-symbols-outlined">{props.likes}</span>
            <button>+</button>
            <button className="close">close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardH;
