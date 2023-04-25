import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' ;
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;


