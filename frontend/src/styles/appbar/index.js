import { styled, Typography, List } from "@mui/material"
import { Box } from "@mui/system"
import { Colors } from "../theme"
// import "@fontsource/montez"
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2px 8px",
  width: "90%",
  margin: "0 auto",
  a: {
    color: Colors.white,
  },
}))
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Poppins", "sans"',
  color: Colors.secondary,
}))

export const MyList = styled(List)(({ type }) => ({
  a: {
    margin: "0 3rem",
    fontSize: "1.6rem",
    fontWeight: "600",
  },
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}))
