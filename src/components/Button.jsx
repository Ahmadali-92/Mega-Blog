import React from "react";

function Button({
  text,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div>
      <button {...props} className={`${bgColor} ${textColor} ${className}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
