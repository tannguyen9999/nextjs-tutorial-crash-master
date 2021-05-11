import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useRouter } from "next/router";
import Menu1 from "./Menu/index";
import Search from "./Search";
import Link from "next/link";
import BreadCum from "../components/BreadCum/index";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  tabs: {
    display: "block",
    "@media (max-width: 770px)": {
      display: "none",
    },
  },

  menu: {
    display: "none",
    "@media (max-width: 770px)": {
      display: "block",
    },
  },
  logo: {
    display: "block",
    width: "70px",
    height: "40px",
    objectFit: "cover",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      marginLeft: "8px",
    },
  },
}));

export default function DenseAppBar({ valuee }) {
  const line = [
    "",
    "diem-song-ao",
    "quancaphe",
    "diem-an-uong",
    "diem-an-vat",
    "ngu-nghi",
    "dac-san-da-lat",
  ];
  const router = useRouter();

  const classes = useStyles();
  const [value, setValue] = React.useState(valuee);

  const handleChange = (event, newValue) => {
    const rou = line[newValue];

    setValue(newValue);
    router.push(`/${rou}`);
  };

  const handleChangeBreaCum = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ boxShadow: "none", background: "white", color: "black" }}
      >
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img
            onClick={() => {
              handleChange("e", 0);
            }}
            className={classes.logo}
            src="https://res.cloudinary.com/dhvp2fnsk/image/upload/v1620715109/dev_setups/uq9f0htkov5lvxzimquj.png?fbclid=IwAR0kE1vB0st8BH3qz5XMMeKMsrrxs-Pod_32xZe0MTXEqPVVAE3tdRRDObA"
            alt="adsad"
          ></img>

          <Tabs
            className={classes.tabs}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab style={{ minWidth: "130px" }} label="Trang Chủ" />
            <Tab style={{ minWidth: "130px" }} label="Điểm Sống Ảo" />
            <Tab style={{ minWidth: "130px" }} label="Quán Cà Phê" />
            <Tab style={{ minWidth: "130px" }} label="Điểm Ăn Uống" />
            <Tab style={{ minWidth: "130px" }} label="Điểm Ăn Vặt" />
            <Tab style={{ minWidth: "130px" }} label="Ngủ – Nghỉ" />
            <Tab style={{ minWidth: "130px" }} label="Đặc Sản Đà Lạt" />
            <Search></Search>
          </Tabs>
          <div className={classes.menu}>
            <Menu1></Menu1>
          </div>
        </Toolbar>
      </AppBar>
      <div
        style={
          valuee == 0
            ? { display: "none" }
            : { marginLeft: "25px", marginTop: "24px" }
        }
      >
        <BreadCum
          handleChangeBreaCum={handleChangeBreaCum}
          val={valuee}
        ></BreadCum>
      </div>
    </div>
  );
}
