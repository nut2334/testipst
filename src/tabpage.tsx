import React from "react";
import Tablepage from "./tablepage";
import "./tabpage.css";

const Tabpage = () => {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1 style={{ marginLeft: "100px" }}>รายการขอขึ้นทะเบียน</h1>
        <button className="tabs active">ตรวจสอบความถูกต้อง</button>
        <button className="tabs">พิจารณาเอกสาร</button>
        <button className="tabs">ขึ้นทะเบียน</button>
        <button className="tabs">ออกเอกสาร</button>
        <button className="tabs">แก้ไข</button>
        <div className="background">
          <Tablepage />
        </div>
      </div>
    </div>
  );
};

export default Tabpage;
