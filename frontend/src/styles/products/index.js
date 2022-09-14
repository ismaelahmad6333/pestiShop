import { styled, Typography, List, Container, colors } from "@mui/material"
import { Box } from "@mui/system"
import { Colors } from "../theme"
// import "@fontsource/montez"
export const ProductsContainer = styled(Container)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.6rem",
  marginTop: "3.2rem",
  padding: "1.6rem",
  backgroundColor: Colors.backgroundColor,
}))

export const FeaturedContainer = styled(Container)(() => ({
  marginTop: "3.2rem",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",

  div: {
    display: "grid",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "space-between",
    width: "100%",
    img: {
      width: "100%",
      height: "100%",
    },
  },
}))

export const Features = styled(Container)(() => ({
  display: "grid",
  flexDirection: "row",
  gridTemplateColumns: "repeat(3, 1fr)",
  marginTop: "2.4rem",
}))

export const SingleProductContainer = styled(Container)(() => ({
  backgroundColor: Colors.backgroundColor,
  padding: "1.6rem",
  marginTop: "5rem",
  border: `1px solid ${Colors.borderColor}`,
}))

export const styles = {
  link: () => ({
    color: Colors.white,
  }),

  btn: () => ({
    background: Colors.primary,
    fontWeight: "600",
    fontSize: "1rem",
    svg: {
      height: "2rem",
      marginRight: "1rem",
    },
  }),
  card: () => ({
    opacity: "0.75",

    color: Colors.white,
    // opacity: "0.9",
    // background: "transparent",
    a: {
      color: Colors.white,
    },
    span: {
      color: Colors.white,
    },
    backgroundColor: Colors.backgroundColor,

    "&:hover": {
      opacity: "1",
    },
  }),
  sItem: () => ({
    img: {
      minWidth: "40rem",
    },
  }),
  price: {
    fontWeight: "600",
  },

  ///////////////featured products

  ////////////features

  features: () => ({
    border: "1px solid #f3f3f3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "12rem",
    backgroundColor: Colors.backgroundColor,

    svg: {
      color: Colors.primary,
      width: "3rem",
      height: "5rem",
    },
  }),
}
