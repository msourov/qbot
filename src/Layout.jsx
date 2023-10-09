import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Button, Space } from "antd";

export default function Layout() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  console.log("inside layout");
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
              <Link to="/path">
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
              <Link to="/path">
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

        <div
          className="image-container"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            marginLeft: "1vw",
          }}
        >
          <img src="./B1.png" style={{ width: "80px" }} alt="Logo" />
        </div>
      </div>
    </>
  );
}
