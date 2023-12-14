import React from "react";

const sizeClasses = {
  txtAlegreyaSansRegular40: "font-alegreyasans font-normal",
  txtCabinRegular16Black900: "font-cabin font-normal",
  txtCabinRegular16: "font-cabin font-normal",
  txtAlegreyaSansRegular36: "font-alegreyasans font-normal",
  txtAlegreyaSansRegular32: "font-alegreyasans font-normal",
  txtBebasNeueRegular58: "font-bebasneue font-normal",
  txtCabinRegular16Gray50001: "font-cabin font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
