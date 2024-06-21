import { Link } from "react-router-dom";

export const CustomLink = ({ to, children, ...props }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={scrollToTop}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};
