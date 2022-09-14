import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import React from "react"
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../styles/appbar"
// import SearchIcon from "@mui/icons-material/Search"
// import Act from "./Act"

import { Link, NavLink } from "react-router-dom"

const AppbarDekstop = ({ matches }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>
        <Link to="/">Pesti shop</Link>
      </AppbarHeader>
      <MyList type="row">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/">Login</Link>
      </MyList>
    </AppbarContainer>
  )
}

export default AppbarDekstop
