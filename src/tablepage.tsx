import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridSearchIcon } from "@mui/x-data-grid";
import { Chip, IconButton, InputBase, Paper } from "@mui/material";
import "./tablepage.css";

interface data {
  name: string;
  code: string;
  createDate: string;
  verifyBy: string;
  verifyDate: string;
  status: string;
}

const Tablepage = () => {
  const columns: GridColDef[] = [
    { field: "name", headerName: "ชื่อหน่วยงาน", flex: 1 },
    { field: "code", headerName: "รหัสหน่วยงาน", flex: 1 },
    { field: "createDate", headerName: "วันที่ขึ้นทะเบียน", flex: 1 },
    {
      field: "verifyBy",
      headerName: "ชื่อผู้ตรวจสอบ",
      flex: 1,
    },
    {
      field: "verifyDate",
      headerName: "วันที่ตรวจสอบ",
      flex: 1,
    },
    {
      field: "status",
      headerName: "สถานะ",
      width: 200,
      headerAlign: "center",
      renderCell: (params) => {
        let chipStyle;

        switch (params.value) {
          case "รอดำเนินการ":
            chipStyle = {
              width: "100%",
              backgroundColor: "#109cf1",
              color: "#ffffff",
            };
            break;
          case "รอตรวจสอบ":
            chipStyle = {
              width: "100%",
              backgroundColor: "#0d8cdb",
              color: "#ffffff",
            };
            break;
          case "พิจารณาเอกสาร":
            chipStyle = {
              width: "100%",
              backgroundColor: "#FFB302",
              color: "#ffffff",
            };
            break;
          case "ขึ้นทะเบียน":
            chipStyle = {
              width: "100%",
              backgroundColor: "#4ad300",
              color: "#ffffff",
            };
            break;
          case "ออกเอกสาร":
            chipStyle = {
              width: "100%",
              backgroundColor: "#297500",
              color: "#ffffff",
            };
            break;
          case "แก้ไข ครั้งที่ 1.1":
            chipStyle = {
              width: "100%",
              backgroundColor: "#FF3838",
              color: "#ffffff",
            };
            break;
          case "แก้ไข ครั้งที่ 1.2":
            chipStyle = {
              width: "100%",
              backgroundColor: "#ad2424",
              color: "#ffffff",
            };
            break;
          default:
            chipStyle = {
              width: "100%",
              backgroundColor: "#c33cd4",
              color: "#ffffff",
            };
        }
        return <Chip label={params.value} style={chipStyle} />;
      },
    },
    {
      field: "fixedValue",
      headerName: "",
      width: 10,
      renderCell: () => <div className="customFont">0</div>,
    },
  ];
  const [rows, setRows] = useState<data[]>();
  const [searchText, setSearchText] = useState("");

  const filteredRows =
    rows &&
    rows.filter((row) =>
      Object.values(row).some(
        (
          value //คืนค่าเป็นอาร์เรย์ของค่าทั้งหมด
        ) => value.toString().toLowerCase().includes(searchText.toLowerCase()) //แปลงค่าให้เป็นstring
      )
    );

  useEffect(() => {
    axios.get("https://test-api-py77dwlbxa-df.a.run.app/data").then((res) => {
      console.log(res.data);
      setRows(res.data);
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "30px",
            background: "#f0f0f0",
            marginBottom: "10px",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <GridSearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, fontFamily: '"Kanit", sans-serif' }}
            placeholder="ค้นหา"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </Paper>
      </div>
      <div
        style={{
          height: 500,
          width: "100%",
          background: "white",
        }}
      >
        <DataGrid
          getRowId={(row) => row.code}
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Tablepage;
