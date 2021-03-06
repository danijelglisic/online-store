import CartArticleList from '../compontents/cart/CartArticleList';
import useActiveCart from "../hooks/useActiveCartQuery";

const Cart = () => {
    const result = useActiveCart();
    if (result.loading) return <div>Loading...</div>
    if (result.error) return <div>Error...</div>
    const cartId = result.data.lastCartId;

    return (
        <div className="mt-20 w-1/2 justify-center inline-flex ">
            <CartArticleList cartId={cartId} cartRefetch={result.refetch} />
        </div>
    )
}

export default Cart
