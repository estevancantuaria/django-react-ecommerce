import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row,Col,Image,Form,Button,Card, ListGroup} from 'react-bootstrap';
import Message from '../components/Messager';
import {addToCart} from '../actions/catActions';

function CartScreen({match,location,history}){
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart
    console.log("cart: ", cartItems)

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])

    return (
       <Row>
           <Col md={8}>
               <h1>Shopping Cart</h1>
               {cartItems.length === 0 ? (
                   <Message variant='info'>
                       Carrinho Vazio <Link className="ml-2" to='/'>Voltar</Link>
                   </Message>
               ):(
                   <ListGroup variant='flush'>
                       {cartItems.map(item=>
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, e.target.value))}>
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x)=>(
                                                            <option key={x+1} value={x+1}>
                                                                {x+1}
                                                            </option>
                                                        ))
                                                    }
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                       )}
                   </ListGroup>
               )}
           </Col>
           <Col md={8}>
           </Col>
       </Row>
    )
}

export default CartScreen
