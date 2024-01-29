/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Product(props) {
    const {product, showButton} = props;
  return (
    <>
        <Card className="card my-4 p-2">
            <Card.Img className="card__image" variant="top" src={product.image} alt={product.title} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
            </Card.Body>
        </Card>
    </>
  )
}
