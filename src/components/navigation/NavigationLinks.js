import { NavLink } from "react-router-dom";

function NavigationLinks({ name, to }) {
  return (
    <li>
      <NavLink className="px-3 py-2 rounded-lg" to={to}>
        {name}
      </NavLink>
    </li>
  );
}
export default NavigationLinks;
