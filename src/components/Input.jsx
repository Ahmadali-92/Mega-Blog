import React, { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const { id } = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Input);
