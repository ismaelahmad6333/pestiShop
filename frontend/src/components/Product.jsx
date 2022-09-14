import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { styles } from "../styles/products/index"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Rating from "./Rating"
import { SingleProductContainer } from "../styles/products/index"
import axios from "axios"
const Product = () => {
  const { id } = useParams()
  // const product = products.find((p) => p._id === id)

  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <SingleProductContainer>
      <Container
        sx={{
          display: "flex",
          alignItems: "start",
          gap: "1.6rem",
        }}
        fixed
      >
        <Box sx={styles.sItem}>
          <img src={product.image} />
        </Box>
        <Card sx={({ minWidth: 350 }, styles.card)}>
          <CardContent>
            <Typography sx={{ fontSize: "1.6rem" }} gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6">
              Brand: {product.brand}
              <br />
            </Typography>
            <Box>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="orange"
              />
            </Box>
            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
              {product.description}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant="contained" sx={styles.btn}>
              <ShoppingCartIcon />
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Container>
    </SingleProductContainer>
  )
}

export default Product
