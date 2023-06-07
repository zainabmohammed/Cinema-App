import React from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";


function HeaderApp() {
  return (
    <>
      <div className="header-movie">
        <div className="container-movie">
          <div className="content-movie">
            <div className="text-movie">
              <div className="dash"></div>

              <h1> CINE APP</h1>
              <div className="dash-under"></div>
            </div>

            <div className="search">
              <div className="input-movie">
                <input type="text" class="search" placeholder="Find Move..." />{" "}
                <FiSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default HeaderApp;
