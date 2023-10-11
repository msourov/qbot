import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Button, Space } from "antd";
import "./styles/layout.css";

export default function Layout() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  return (
    <>
      <div className="container">
        <div className="header">
          <img
            src="http://192.168.60.86:9000/dekstop/logo/read/logo.png"
            style={{ width: "200px" }}
            alt="Logo"
          />
        </div>
        {isRootPath && (
          <div className="btn-options">
            <Space
              wrap
              direction="vertical"
              style={{ marginInline: "auto", marginTop: "30px" }}
            >
              <Link to={{ pathname: "/path", search: "?option=gopd" }}>
                <Button
                  type="primary"
                  style={{
                    width: "150px",
                    outline: "none",
                    border: "none",
                    padding: "0",
                  }}
                >
                  GOPD
                </Button>
              </Link>
              <Link to={{ pathname: "/path", search: "?option=popd" }}>
                <Button
                  type="primary"
                  style={{
                    width: "150px",
                    outline: "none",
                    border: "none",
                  }}
                >
                  POPD
                </Button>
              </Link>
            </Space>
          </div>
        )}
        <div className="nested-content">
          <Outlet />
        </div>
        <div className="scrolling-container">
          <div className="scrolling-text">
            A product of Transworld Mercantile Corporation. For more information
            please visit <strong>www.transworldbd.com</strong> or call{" "}
            <strong>+880 9613848484, +880 1860877300</strong>
          </div>
        </div>

        <div className="bot-logo-container">
          <img src="./B1.png" style={{ width: "80px" }} alt="Logo" />
          <p
            className="bot-logo-text"
            style={{
              color: "black",
              margin: "0.5em auto",
              marginTop: "0",
              fontFamily: "Georgia, monospace",
              // fontWeight: "bold",
            }}
          >
            Queue Management Solution
          </p>
        </div>
      </div>
    </>
  );
}
