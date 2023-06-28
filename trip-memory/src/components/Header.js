import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      class="header"
      style={{
        borderBottom: "thick double #333",
        display: "flex",
        height: "80px",
        alignItems: "center",
        padding: "0 30px",
      }}
    >
      <h1>Trip Memory</h1>
      <nav style={{ marginLeft: "auto" }}>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li style={{ marginLeft: "30px" }}>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/top">
              マップ
            </Link>
          </li>
          <li style={{ marginLeft: "30px" }}>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/mission"
            >
              ミッション
            </Link>
          </li>
          <li style={{ marginLeft: "30px" }}>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/mypage"
            >
              マイページ
            </Link>
          </li>
          <li style={{ marginLeft: "30px" }}>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/inquiry"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
