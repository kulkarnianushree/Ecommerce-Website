import { Button } from "react-bootstrap"
const CartButton = (props)=>{
    return(
        <Button variant="danger" onClick={props.onClick} className="cart">Cart {props.count}</Button>
    )
}
export default CartButton