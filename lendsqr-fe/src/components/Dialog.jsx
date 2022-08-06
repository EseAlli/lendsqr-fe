import React from "react";

const Dialog = ({ children, open, handleClick, button }) => {
  const menuBtn = button ?? <button onClick={handleClick}>click</button>;
  return (
    <div>
      {menuBtn}
      {open && <div className="dialog">{children}</div>}
    </div>
  );
};

export default Dialog;
