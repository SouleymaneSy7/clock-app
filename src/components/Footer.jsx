import { useToggle } from "../contexts/ToggleContext";
import { MoreDetails } from "./MoreDetails";

export const Footer = () => {
  const toggle = useToggle();

  return (
    <footer
      className={
        toggle === true ? "footer-container active" : "footer-container"
      }
    >
      <MoreDetails />
    </footer>
  );
};
