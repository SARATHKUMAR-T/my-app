import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

function App() {
  const data = [
    {
      brand: "Apple",
      model: "Iphone 14",
      price:'$450',
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/iphone14productshots-1-1.jpeg",
    },
    {
      brand: "Samsung",
      model: "Galaxy s23",
      price:'$350',
      image:
        "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back-s.jpg",
    },
    {
      brand: "Vivo",
      model: "X90",
      price:'$249',
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2023/02/Vivo-X90.png?tr=q-100",
    },
    {
      brand: "Oppo",
      model: "Reno 8 pro",
      price:'$189',
      image:
        "https://s3b.cashify.in/gpro/uploads/2021/11/19114251/oppo-reno8-pro-5g-back-display.jpg",
    },
  ];
  
  const[count,setCount]=useState(0)
  return (
    <div className="App" >
       <div className="badge">
      <Badge bg="primary" className="b1">Cart {count}</Badge>
      </div>
      <div className="card-container">
       {
      data.map((product,idx)=>(
         <Cart
         key={idx}
         prod={product}
         count={count}
         setCount={setCount}
         />
      ))
    }
    </div>
    </div>
    
  );
}

export default App;

function Cart({prod,count,setCount}) {
  const[show,setShow]=useState(true)


  function addToCart(){
    setShow(!show)
    setCount(count+1)
  }
  function removeCart(){
    setShow(!show)
    setCount(count-1)
  }

 

  return (
        <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} className="image" />
        <Card.Body>
          <Card.Title><strong>{prod.model}</strong></Card.Title>
          <Card.Text>
         <strong>Brand:</strong>{prod.brand}
          </Card.Text>
          <Card.Text>
        <strong>Price:</strong>{prod.price}
          </Card.Text>
         {
          show?
           <Button variant="primary"
           onClick={addToCart}>Add to Cart</Button>

          :<Button variant="danger"
          onClick={removeCart}>Remove from cart</Button>
         }
        </Card.Body>
      </Card>
      </div>
    
  );
}
