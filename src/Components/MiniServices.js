import React from "react";

const MiniServices = ({ cover, trans, slide, i, h4, p, bold, house }) => {
  return (
    <>
      <div className={cover}>
        <div className={trans}>
          <div className={slide}>
            <span>
              <i className={i}></i>
            </span>
          </div>
          <h4>{h4}</h4>
        </div>
        <div className={house}>
          <p>
            {p} <i>{bold}</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default MiniServices;
