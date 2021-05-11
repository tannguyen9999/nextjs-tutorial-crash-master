import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import styless from "../../styles/BlockContent4.module.css";
import React, { useState, useEffect } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Lazyy from "../Lazyy/index";
export default function AlertDialog({
  url,
  open1,
  handleOffZoom,
  onChangeNext,
  onChangePrev,
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleOffZoom();
    setOpen(false);
  };

  const onChangeNextT = () => {
    onChangeNext();
  };

  useEffect(() => {
    if (open1) {
      setOpen(true);
    }
  });

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ background: "black" }}
      >
        <style>{`.MuiDialog-paperWidthSm{
                  max-width:none
                  
              }
              ::-webkit-scrollbar {
                width: 5px;
              }
              
              /* Track */
              ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey; 
                border-radius: 5px;
              }
               
              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: red; 
                border-radius: 10px;
              }
              
              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: #b30000; 
              } `}</style>
        <div onClick={handleClose}>
          <CloseIcon
            className={styless.close}
            style={{
              position: "fixed",
              top: "30px",
              left: "24px",
              fontSize: "30px",
            }}
          ></CloseIcon>
        </div>
        <div onClick={onChangePrev}>
          <KeyboardArrowLeftIcon
            className={styless.arrow}
            style={{ left: "24px" }}
          ></KeyboardArrowLeftIcon>
        </div>
        <div onClick={onChangeNext}>
          <ChevronRightIcon
            className={styless.arrow}
            style={{ right: "24px" }}
          ></ChevronRightIcon>
        </div>
        <img className={styless.imagevip} src={url}></img>
      </Dialog>
    </div>
  );
}
