import React from "react";
import { Link } from "react-router-dom";
import { RecoilState, useRecoilState } from "recoil";
import { ModalState } from "../hooks/modal";

const Header = () => {
  const [viewModal, setViewModal] = useRecoilState(ModalState);
  const showModal = () => {
    if (!viewModal) {
      setViewModal(true);
    }
  };
  return (
    <div
      class="header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        borderBottom: "thick double #333",
        display: "flex",
        height: "80px",
        alignItems: "center",
        padding: "0 30px",
        background: "#fff",
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
            <div
              style={{ textDecoration: "none", color: "#000" }}
              onClick={showModal}
            >
              ミッション
            </div>
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
