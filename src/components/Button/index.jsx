import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[30px]" };
const variants = {
  fill: {
    blue_A700_ea: "bg-blue-A700_ea shadow-bs text-white-A700",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = { xs: "pl-1 py-1", sm: "p-[23px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_A700_ea", "black_900"]),
};

export { Button };
