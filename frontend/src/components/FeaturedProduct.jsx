import React from "react"
import { FeaturedContainer, Features, styles } from "../styles/products"
import img1 from "../assets/images 2/products/prod-hero-1.svg"
import img2 from "../assets/images 2/products/prod-hero-2.svg"
import img3 from "../assets/images 2/products/prod-hero-3.svg"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
const FeaturedProduct = () => {
  return (
    <>
      <FeaturedContainer>
        <Box sx={styles.left}>
          <img src={img1} alt="equipment" />
        </Box>
        <Box sx={styles.right}>
          <img src={img2} alt="equipment" />
          <img src={img3} alt="equipment" />
        </Box>
      </FeaturedContainer>
      <Features>
        <Box component="div" sx={styles.features}>
          <LocalShippingIcon />
          <Typography variant="h5">Super fast and free delivery</Typography>
        </Box>
        <Box component="div" sx={styles.features}>
          <LocalShippingIcon />
          <Typography variant="h5">Super fast and free delivery</Typography>
        </Box>
        <Box component="div" sx={styles.features}>
          <LocalShippingIcon />
          <Typography variant="h5">Super fast and free delivery</Typography>
        </Box>
      </Features>
    </>
  )
}

export default FeaturedProduct
