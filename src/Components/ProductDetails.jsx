/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Product } from "./Product";
export function ProductDetails() {

  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  
  useEffect(() =>{
    fetch(`${api_url}/${params.productId}`)
    .then((res)=>res.json())
    .then(product=>setProduct(product));
  }, []);
   
  return (
      <Container>
        <Product product ={product} showButton={false}/>
      </Container>
  )
}
