
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "./Product";
import { useEffect, useState } from "react";

export function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () =>{
    fetch(api_url)
            .then(res=>res.json())
            .then(data=>setProducts(data))
  }
  const getCategories = () =>{
    fetch(`${api_url}/categories`)
            .then(res=>res.json())
            .then(data=>setCategories(data))
  }

  const getProductInCategory = (catName) =>{
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
  }

  useEffect(() =>{
    getProducts();
    getCategories();
  }, [])


  return (
      <>
      <h2 className="text-center py-5">Our Products</h2>
        <Container>
          <div className="text-center">
            <button className="btn btn-primary m-2" onClick={()=>getProducts()}>All</button>
          {
            categories.map(catButton =>{
              return (
                  <button key={catButton} className="btn btn-primary m-2" onClick={() => {
                    getProductInCategory(catButton)
                  }}>
                    {catButton}
                  </button>
              )
            })
          }
          </div>
          <Row>
            {products.map(product =>{
              return (
                <Col key={product.id} lg={3} md={6}>
                  <Product product ={product} showButton={true}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
  )
}
