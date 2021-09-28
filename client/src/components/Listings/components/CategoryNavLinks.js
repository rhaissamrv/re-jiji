import React from "react";
import { NavLink } from "react-router-dom";
import DisplayCategoryPage from '../../../Pages/DisplayCategoryPage';

import "./CategoryNavLinks.css";
// these will be the categorys of Recycables
const CategoryNavLinks = (props) => {

     return (
    <ul className="category-nav-links">
      <li>
        <NavLink to={{
          pathname:"/Paper",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/paper.jpg" alt="paperWaste" />
          Paper
        </NavLink>
      </li>
      <li>
        <NavLink to={{
          pathname:"/Plastic",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/plasticswaste.jpg" alt="Plastics" />
          Plastic
        </NavLink>
      </li>
      <li>
        <NavLink to={{
          pathname:"/Electronic",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/metal.jpg" alt="Electronics" />
          Electronic
        </NavLink>
      </li>

      <li>
        <NavLink to={{
          pathname: "/Glass",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/glass.jpg" alt="Glass" />
          Glass
        </NavLink>
      </li>
      <li>
        <NavLink to={{
          pathname:"/Metal",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/metalscrap.jpg" alt="Metal" />
          Metal
        </NavLink>
      </li>
      <li>
        <NavLink to={{
          pathname: "/Furniture",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/furniture.jpg" alt="Furniture" />
          Furniture
        </NavLink>
      </li>

      <li>
        <NavLink to={{
          pathname: "/Textile",
          component:{DisplayCategoryPage}
        }}>
          <img src="images/textile.jpg" alt="Textiles" />
          Textile
        </NavLink>
      </li>
      <li>
        <NavLink to={{
          pathname: "/Other",
          component:{DisplayCategoryPage}
        }}>
          <img
            className="li-category-image"
            src="images/battery.jpg"
            alt="Other"
          />
          Other
        </NavLink>
      </li>
      <li>
        <NavLink to={{
          pathname: "/Recyclables",
          component:{DisplayCategoryPage}}}>
          <img
            className="li-category-image"
            src="images/plastic.jpg"
            alt="Recyclables"
          />
          Recyclables
        </NavLink>
      </li>
    </ul>
  );
  // //this dive will be the footer, which should be its own file
  // <div></div>
};

export default CategoryNavLinks;
