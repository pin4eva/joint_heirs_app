import React from "react";

interface IProp {
  children: React.ReactNode;
}
const LoginLayout: React.FC<IProp> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
