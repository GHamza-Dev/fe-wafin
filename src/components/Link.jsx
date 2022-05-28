import { Link, useMatch, useResolvedPath } from "react-router-dom";

const To = ({ children, className, current, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={`${className} ${match && current}`} {...props}>
      {children}
    </Link>
  );
};

export default To;
