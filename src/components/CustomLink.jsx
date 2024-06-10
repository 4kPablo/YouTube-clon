import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={scrollToTop} className={isActive ? "" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};
