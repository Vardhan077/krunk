import "./KrunkContainer.css";

const KrunkContainer = () => {
  return (
    <header className="krunk-container">
      <div className="frame-div">
        <div className="simple-chatbots-parent">
          <img
            className="simple-chatbots-icon"
            loading="lazy"
            alt=""
            src="/simple-chatbots@2x.png"
          />
          <div className="frame-child" />
        </div>
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="timpu-wrapper">
              <h3 className="timpu">{`Timpu `}</h3>
            </div>
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="chat-assistant-wrapper">
            <div className="chat-assistant">Chat assistant</div>
          </div>
        </div>
      </div>
      <div className="krunk-container-inner">
        <div className="ellipse-parent">
          <div className="frame-item" />
          <div className="online">Online</div>
        </div>
      </div>
    </header>
  );
};

export default KrunkContainer;
