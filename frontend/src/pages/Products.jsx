import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/system"
import { ProductsContainer, styles } from "../styles/products/index.js"
import FeaturedProduct from "../components/FeaturedProduct.jsx"
import Rating from "../components/Rating.jsx"
import axios from "axios"
const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products")
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <FeaturedProduct />
      <ProductsContainer fixed>
        {products.map((item) => {
          const { _id: id, name, price, brand, image, description } = item
          return (
            <Card sx={({ minWidth: 350 }, styles.card)} key={id}>
              <Link to={`/product/${id}`}>
                <CardMedia component="img" height="200" image={image} />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h4">
                  <Link to={`/product/${id}`}>{name}</Link>
                </Typography>
                <Typography variant="h6">Brand: {brand}</Typography>
                <Typography variant="h5" sx={styles.price}>
                  Php {price}
                </Typography>
                <br />
                <Typography variant="body" color="text.secondary">
                  {description}
                </Typography>
                <Box mt="1rem">
                  <Rating
                    value={item.rating}
                    text={`${item.numReviews} reviews`}
                    color="orange"
                  />
                </Box>
              </CardContent>
            </Card>
          )
        })}
      </ProductsContainer>
    </>
  )
}

export default Products
