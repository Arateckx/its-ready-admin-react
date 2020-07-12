import React from "react";
import "./AsideMenu.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import logo from "../../assets/logo.png";
import { Nav } from "react-bootstrap";
import clockicon from "../../assets/clockicon.png";
import homeicon from "../../assets/homeicon.png";
import planeicon from "../../assets/planeicon.png";
import settingsicon from "../../assets/settingsicon.png";
import usericon from "../../assets/usericon.png";
import FooterText from "../FooterText/FooterText";
import { PieChart, Home, User, Send, Sliders } from "react-feather";
const AsideMenu = (props) => {
  const imgSrc = [
    {
      source: PieChart,
      name: "HOME",
      link: "/",
    },
    {
      source: Home,
      name: "HANDELAARS",
      link: "/merchants",
    },
    {
      source: User,
      name: "GEBRUIKERS",
      link: "/users",
    },
    {
      source: Send,
      name: "PUSHBERICHTEN",
      link: "/notifications",
    },
    {
      source: Sliders,
      name: "INSTELLINGEN",
      link: "/settings",
    },
  ];
  let history = useHistory();
  console.log("the path location is", history.location.pathname);
  return (
    <span>
      <div style={{ left: 0 }}>
        <img src={logo} alt="Logo" className="" />
      </div>
      <br />
      <div
        className="d-flex justify-content-between flex-column"
        style={{ minHeight: "83%" }}
      >
        <div>
          {/* HOME PAGE */}
          {/*  {
            source: PieChart,
            name: "HOME",
            link: "/",
          }, */}
          <div>
            <Link
              to="/"
              onClick={() => {
                props.setCurrentPage("/");
              }}
            >
              <div
                className={
                  props.currentPage == "/" ? "menu-text active" : "menu-text"
                }
              >
                <PieChart className="mr-3" />
                <div className="menu-items-text">HOME</div>
              </div>
            </Link>
          </div>

          {/* HANDELAARS */}
          {/* {
            source: Home,
            name: "HANDELAARS",
            link: "/merchants",
          }, */}
          <div>
            <Link
              to="/merchants"
              onClick={() => {
                props.setCurrentPage("/merchants");
              }}
            >
              <div
                className={
                  props.currentPage == "/merchants"
                    ? "menu-text active"
                    : "menu-text"
                }
              >
                <Home className="mr-3" />
                <div className="menu-items-text">HANDELAARS</div>
              </div>
            </Link>
          </div>

          {/* GEBRUIKERS */}
          {/* {
            source: User,
            name: "GEBRUIKERS",
            link: "/users",
          }, */}
          <div>
            <Link
              to="/users"
              onClick={() => {
                props.setCurrentPage("/users");
              }}
            >
              <div
                className={
                  props.currentPage == "/users"
                    ? "menu-text active"
                    : "menu-text"
                }
              >
                <User className="mr-3" />
                <div className="menu-items-text">GEBRUIKERS</div>
              </div>
            </Link>
          </div>

          {/* PUSHBERICHTEN */}
          {/* {
            source: Send,
            name: "PUSHBERICHTEN",
            link: "/notifications",
          },   */}
          <div>
            <Link
              to="/notifications"
              onClick={() => {
                props.setCurrentPage("/notifications");
              }}
            >
              <div
                className={
                  props.currentPage == "/notifications"
                    ? "menu-text active"
                    : "menu-text"
                }
              >
                <Send className="mr-3" />
                <div className="menu-items-text">PUSHBERICHTEN</div>
              </div>
            </Link>
          </div>

          {/* INSTELLINGEN */}
          {/*  {
            source: Sliders,
            name: "INSTELLINGEN",
            link: "/settings",
          }, */}
          <div>
            <Link
              to="/settings"
              onClick={() => {
                props.setCurrentPage("/settings");
              }}
            >
              <div
                className={
                  props.currentPage == "/settings"
                    ? "menu-text active"
                    : "menu-text"
                }
              >
                <Sliders className="mr-3" />
                <div className="menu-items-text">INSTELLINGEN</div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <FooterText />
        </div>
      </div>
    </span>
  );
};
export default AsideMenu;
