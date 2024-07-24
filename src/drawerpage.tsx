import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Drawerpage = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#f1f1f1",
        },
      }}
      variant="permanent" //เปิดค้างไว้
      anchor="left"
    >
      <Box>
        <Box padding="10px">
          <img
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "100%",
              borderStyle: "solid",
              borderColor: "white",
            }}
            src="profile.jpg"
          />
        </Box>
        <center>
          <h3>นพ.ทดสอบ ระบบแพทย์</h3>
          <h5>กระทรวงสาธารณะสุข กรมควบคุมโรค</h5>
        </center>
        <List>
          <ListItem key="หน้าหลัก" disablePadding>
            <ListItemButton
              sx={{
                background: "white",
                borderRadius: "30px 0 0 30px",
              }}
            >
              <ListItemText
                primary={
                  <div style={{ display: "flex", alignContent: "center" }}>
                    <div
                      style={{
                        borderRadius: "100%",
                        background: "#f1f1f1",
                        height: "30px",
                        width: "30px",
                        marginRight: "10px",
                      }}
                    ></div>
                    <Typography
                      sx={{
                        fontFamily: '"Kanit", sans-serif',
                        fontWeight: "500",
                      }}
                    >
                      หน้าหลัก
                    </Typography>
                  </div>
                }
              />
            </ListItemButton>
          </ListItem>
          {["ขึ้นทะเบียนสำเร็จ", "User Management"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <div style={{ display: "flex", alignContent: "center" }}>
                      <div
                        style={{
                          borderRadius: "100%",
                          background: "rgba(255,255,255,255)",
                          height: "30px",
                          width: "30px",
                          marginRight: "10px",
                        }}
                      ></div>
                      <Typography
                        sx={{
                          fontFamily: '"Kanit", sans-serif',
                          fontWeight: "500",
                        }}
                      >
                        {text}
                      </Typography>
                    </div>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{ marginTop: "350px", textAlign: "left", paddingLeft: "60px" }}
        >
          <p>บริการอื่นๆ</p>
          <p>คำถามที่พบบ่อย</p>
          <h3>ออกจากระบบ</h3>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Drawerpage;
