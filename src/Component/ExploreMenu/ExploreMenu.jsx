import React from "react";
import "./ExploreMenu.css";
import { menuList } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="container pt-5 pb-5">
      <div className="explore-menu" id="explore-menu">
        <div className="text-center pb-3">
          <h2>Explore Our Menu</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat
            tenetur reprehenderit in excepturi quis perspiciatis harum
            laudantium ipsam doloremque.
          </p>
        </div>
        <div className="row g-3 justify-content-center m-auto">
          {menuList.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menuName ? "All" : item.menuName
                  )
                }
                className="col-lg col-md col-sm-3 col-3 explore-menu-item text-center"
                key={index}
              >
                <img
                  src={item.menuImg}
                  alt={item.menuName}
                  className={category === item.menuName ? "active" : ""}
                />
                <h6>{item.menuName}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
