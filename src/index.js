import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("xm")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("xl" >= 1536)]: {},
    [theme.breakpoints.down("xm", "sm")]: {},
    [theme.breakpoints.down("sm", "md")]: {},
    [theme.breakpoints.down("md", "lg")]: {},
    [theme.breakpoints.down("lg", "xl")]: {}
  }));



ReactDOM.render(
  <Root>
    <Typography>
    <App />
    </Typography>
  </Root>,
  document.getElementById("root")
);
