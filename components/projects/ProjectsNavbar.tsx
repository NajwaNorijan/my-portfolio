import { FunctionComponent } from "react";
import { Category } from "../../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-blue-400";

  if (active === value) {
    className += " text-blue-400";
  }

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="material ui" {...props} />
      <NavItem value="javascript" {...props} />
      <NavItem value="rapidapi" {...props} />
      <NavItem value="redux" {...props} />
      <NavItem value="spline" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
